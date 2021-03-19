import React from 'react';
import { ModalContent, ModalWrapper, CloseModalButton } from './ModalElements';

const Modal = ({ message, setShowModal }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <p>{message}</p>
      </ModalContent>
      <CloseModalButton
        aria-label='Close modal'
        onClick={() => setShowModal((prev) => !prev)}
      />
    </ModalWrapper>
  );
};

export default Modal;
