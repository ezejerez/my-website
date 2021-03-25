import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ModalWrapper = styled.div`
  width: 600px;
  height: 150px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  gid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 330px;
    height: 100px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;

  > p {
    margin-bottom: 1rem;
    text-align: left;

    margin: 0 50px 0 50px;

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  padding: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
  }
`;
