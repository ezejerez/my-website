import styled from 'styled-components';

export const AboutSectionContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const AboutSectionContent = styled.div`
  z-index: 3;
  width: 800px;
  height: 600px;
  position: absolute;
  padding: 8 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: dotted double;
  border-radius: 20px;
  border-color: #01bf71;

  @media screen and (max-width: 950px) {
    width: 700px;
    height: 500px;
  }

  @media screen and (max-width: 840px) {
    width: 700px;
    height: 500px;
  }

  @media screen and (max-width: 730px) {
    width: 90vw;
    height: 50vh;
  }

  @media screen and (max-width: 400px) {
    width: 90vw;
    height: 60vh;
  }
`;

export const AboutSectionTitle = styled.h1`
  margin-bottom: 90px;
  color: #fff;
  font-size: 40px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 480px) {
    font-size: 35px;
    margin-bottom: 70px;
  }
`;

export const AboutSectionP1 = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 300px;
  }
`;

export const AboutSectionP2 = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 300px;
  }
`;

export const AboutSectionList = styled.div`
  margin-top: 24px;
  width: 300px;
  color: #01bf71;
  align-items: center;
  font-size: 24px;
  text-align: left;
  display: flex;
  justify-content: space-between;

  > div li {
    list-style-type: disclosure-closed;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 200px;
  }
`;
