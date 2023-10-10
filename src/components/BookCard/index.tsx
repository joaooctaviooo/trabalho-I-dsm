import { Dimensions } from "react-native";
import { useTheme } from "styled-components";
import { AirbnbRating } from "react-native-ratings";

import FoundationIcon from "@expo/vector-icons/Foundation";
import EntypoIcon from "@expo/vector-icons/Entypo";

import * as S from "./styles";
import { BookListItem } from "../../pages/Home";

const ICON_SIZE = Dimensions.get("window").height * 0.09;

type BookCardProps = {
  data: BookListItem;
  onPressRateButton: (data: BookListItem) => void; 
}

export const BookCard = ({ data: book, onPressRateButton }: BookCardProps) => {
  const theme = useTheme();

  function handlePressRateButton(){
    onPressRateButton(book);
  }

  return ( 
    <S.Container>
      <S.CardMarker />

      <S.CardBody>
        <S.BookInfoContainer>
          <FoundationIcon 
            name="book-bookmark"
            size={ICON_SIZE}
            color={theme.colors.primary}
            style={{ marginVertical: 8 }}
          />

          <S.BookDescription>
            <S.BookTitle>{book.title}</S.BookTitle>

            <S.BookSecondaryInfos>
              <S.BookInfoRow>
                <S.BookInfoLabel>Autor:</S.BookInfoLabel>
                <S.BookInfo>{book.author}</S.BookInfo>
              </S.BookInfoRow>

              <S.BookInfoRow>
                <S.BookInfoLabel>URL:</S.BookInfoLabel>
                <S.BookInfo>{book.url}</S.BookInfo>
              </S.BookInfoRow>
            </S.BookSecondaryInfos>


          </S.BookDescription>
        </S.BookInfoContainer>

        <S.LineSeparator />

        <S.CardFooter>
          {
            book?.rating ? (
              <AirbnbRating
                count={5}
                defaultRating={book.rating}
                showRating={false}
                size={14}
              />
            ) : (
              <S.NoRatingLabel>(Sem Avaliação)</S.NoRatingLabel>
            )
          }
          
          <S.GiveRateButton onPress={handlePressRateButton}>
            <S.GiveRateLabel>Avaliar</S.GiveRateLabel>
            <EntypoIcon 
              size={18} 
              color={theme.colors.primary}  
              name="chevron-right"
            />
          </S.GiveRateButton>
        </S.CardFooter>
      </S.CardBody>
    </S.Container>
  );
}