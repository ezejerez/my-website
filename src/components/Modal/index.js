import React from 'react';
import { ModalContent, ModalWrapper, CloseModalButton } from './ModalElements';

const Modal = ({ message, setShowModal }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <p>{message}</p>
      </ModalContent>
      <CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
    </ModalWrapper>
  );
};

export default Modal;
