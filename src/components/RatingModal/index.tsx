import React, { useRef, useImperativeHandle, useState } from "react";
import { Modalize } from "react-native-modalize";
import { AirbnbRating } from "react-native-ratings";

import * as S from "./styles";

import { BookListItem } from "../../pages/Home";

export type RatingModalHandles = {
  open: (data: BookListItem) => void;
  close: () => void;
}

type RatingModalProps = {
  onSaveRating: (updatedBook: BookListItem) => void;
};

const RatingModalComponent: React.ForwardRefRenderFunction<RatingModalHandles, RatingModalProps> = (
  { onSaveRating }, 
  ref
) => {
  const modalRef = useRef<Modalize | null>(null);

  const [selectedBook, setSelectedBook] = useState<BookListItem | null>(null);
  const [bookRating, setBookRating] = useState(0);

  function openModal(data: BookListItem){
    modalRef.current?.open();

    setBookRating(0);
    setSelectedBook(data);
  }

  function closeModal(){
    modalRef.current?.close();
  }

  function handleChageRating(rating: number){
    setBookRating(rating);
  }

  function handleSaveRating(){
    if(selectedBook){
      onSaveRating({ ...selectedBook, rating: bookRating });
      closeModal();
    }
  }

  useImperativeHandle(ref, () => {
    return {
      close: closeModal,
      open: openModal
    }
  });

  return (
    <Modalize ref={modalRef} >
      <S.ModalContent>
        <S.ModalTitle>Avaliar Livro</S.ModalTitle>

        <S.ContentRow>
          <S.Label>Título</S.Label>
          <S.Info>{selectedBook?.title}</S.Info>
        </S.ContentRow>

        <S.ContentRow>
          <S.Label>Informe a nota</S.Label>
          <AirbnbRating
            count={5}
            defaultRating={bookRating}
            showRating={false}
            onFinishRating={handleChageRating}
            size={20}
            starContainerStyle={{ marginTop: 6 }}
          />
        </S.ContentRow>

        <S.Button onPress={handleSaveRating}>
          <S.ButtonLabel>Salvar Avaliação</S.ButtonLabel>
        </S.Button>
      </S.ModalContent>
    </Modalize>
  );
};

export const RatingModal = React.forwardRef(RatingModalComponent);