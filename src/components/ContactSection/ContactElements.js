import styled from 'styled-components';

export const ContactSectionBackground = styled.div`
  // background: #0c0c0c;
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 937px;
  z-index: 1;
`;

export const ContactSectionContainer = styled.div`
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  z-index: 1;
`;

export const ContactSectionTitle = styled.h1`
  color: red;
  font-size: 40px;
  text-align: center;
  display: flex;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const ContactButton = styled.input`
  background: #fff;
  color: #000000;
  cursor: pointer;

  &: hover {
    background: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
