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

// export const ContactSectionContainer = styled.div`
//   background: blue;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 300px;
//   height: 300px;
//   z-index: 1;
// `;

// export const ContactSectionTitle = styled.h1`
//   color: red;
//   font-size: 40px;
//   text-align: center;
//   display: flex;

//   @media screen and (max-width: 768px) {
//     font-size: 30px;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 25px;
//   }
// `;

// export const ContactButton = styled.input`
//   background: #fff;
//   color: #000000;
//   cursor: pointer;

//   &: hover {
//     background: #01bf71;
//     transition: 0.2s ease-in-out;
//   }
// `;

// export const ContactInput = styled.input``;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vh;
  padding: 0 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;

  background: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: none;

  background: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  display: block;
  background: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;
