import styled from 'styled-components';

export const AboutSectionContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 937px;
  position: relative;
  z-index: 1;
`;

export const AboutSectionContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutSectionTitle = styled.h2`
  color: #fff;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

export const AboutSectionP1 = styled.p`
  margin-top: 100px;
  color: #fff;
  font-size: 24px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AboutSectionP2 = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const AboutSectionP3 = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
