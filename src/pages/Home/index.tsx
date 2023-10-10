import { useEffect, useState, useRef } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from "expo-status-bar";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome";

import * as S from "./styles";

import { BookCard, Header } from "../../components";
import { RatingModal, RatingModalHandles } from "../../components/RatingModal";

import { BookModel } from "../../models";

import { api } from "../../services";

export type BookListItem = BookModel & {
  rating?: number;
};

type FlatListRenderFunction = {
  item: BookListItem;
};

export const Home = () => {
  const theme = useTheme();
  const ratingModalRef = useRef<RatingModalHandles | null>(null);

  const [books, setBooks] = useState<BookListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [searchText, setSearchText] = useState("");

  async function loadBooks(searchText?: string) {
    setIsLoading(true);

    try {
      await tryLoadBooks(searchText);
    } catch (error) {
      catchLoadBooks(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function tryLoadBooks(searchText?: string) {
    const URI = "v1/search";
    const response = await api.get(URI, {
      params: {
        query: searchText || "",
      },
    });

    const loadedBooks = response.data.hits as BookModel[];
    const parsedBooks = parseAndRemoveInconsistentBookData(loadedBooks);

    setBooks(parsedBooks);
    setError(false);
  }

  function parseAndRemoveInconsistentBookData(data: BookModel[]) {
    const parsedData = data.filter((book) => {
      if (book.author && book.title && book.url) {
        return true;
      }

      return false;
    });

    return parsedData;
  }

  function catchLoadBooks(unknownError: unknown) {
    const error = unknownError as Error;
    console.log("Loading books error: ", error.message);

    setError(true);
  }

  function handleSearchBooks(){
    loadBooks(searchText);
  }

  function setStatusBar() {
    setStatusBarBackgroundColor(theme.colors.primary, true);
    setStatusBarStyle("light");
  }

  function renderBookCard({ item }: FlatListRenderFunction) {
    return <BookCard data={item} onPressRateButton={handlePressBookCardRateButton} />;
  }

  function handlePressBookCardRateButton(book: BookListItem){
    ratingModalRef.current?.open(book);
  }

  function handleAddBookRate(updatedBook: BookListItem){    
    const remainingBooks = books.map((bookItem) => {
      if(bookItem.url === updatedBook.url){
        return updatedBook;
      }

      return bookItem;
    });

    setBooks(remainingBooks);
  }

  useEffect(() => {
    setStatusBar();
    loadBooks();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <S.FullCenteredContainer>
          <S.Loading />
        </S.FullCenteredContainer>
      ) : (
        <> 
          <S.SearchBox>
            <S.SearchInput
              placeholder="Digite aqui e clique no botão para buscar"
              value={searchText}
              onChangeText={setSearchText}
            />
            <S.SearchButton onPress={handleSearchBooks}>
              <FontAwesomeIcon
                name="search"
                size={18}
                color={theme.colors.light}
              />
            </S.SearchButton>
          </S.SearchBox>

          {error && (
            <S.FullCenteredContainer>
              <S.ErrorMessage>Erro ao carregar livros</S.ErrorMessage>
            </S.FullCenteredContainer>
          )}

          {!error && books.length <= 0 && (
            <S.FullCenteredContainer>
              <S.ErrorMessage>Nenhum livro encontrado</S.ErrorMessage>
            </S.FullCenteredContainer>
          )}

          {!error && books.length > 0 && (
            <FlatList<BookListItem>
              data={books}
              keyExtractor={(book) => String(book.url)}
              renderItem={renderBookCard}
              contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 64,
              }}
            />
          )}
        </>
      )}

      <RatingModal 
        ref={ratingModalRef} 
        onSaveRating={handleAddBookRate}
      />
    </>
  );
};
