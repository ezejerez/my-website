import styled from 'styled-components';

export const ContactSectionBackground = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(1, 38, 38, 1) 25%,
    rgba(0, 33, 33, 1) 50%,
    rgba(1, 38, 38, 1) 75%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  z-index: 1;
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vh;
  padding: 0 20px;
`;

export const ContactForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background: #0c0c0c;
  border-radius: 10px;
  border: 1px solid #eee;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const ContactH2 = styled.h2`
  color: #eee;
  margin-bottom: 40px;
`;

export const ContactInput = styled.input`
  display: block;
  width: 100%;
  color: white;
  background: #3e3636;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  padding: 20px;
  box-sizing: border-box;
  outline: none;

  ::placeholder {
    color: #eee;
  }
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;
  background: #3e3636;
  color: white;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  padding: 20px;
  box-sizing: border-box;
  outline: none;

  ::placeholder {
    color: #eee;
  }
`;

export const ContactButton = styled.button`
  display: block;
  background: #eee;
  color: #000;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  margin-top: 15px;

  @media screen and (max-width: 768px){
    background: #01bf71;
    color: white;
  }
  
 &: hover {
    background: #01bf71;
    color: white;
    transition: 0.2s ease-in-out;
`;

export const ErrorMessage = styled.p`
  position: relative;
  color: red;
  font-size: 0.8rem;
  margin-top: 2px;
`;
