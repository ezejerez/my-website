import styled from 'styled-components';

export const FirstSectionContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 937px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);

    z-index: 2;
  }
`;

export const FirstSectionBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: 232a34;
`;

export const FirstSectionContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstSectionP1 = styled.p`
  margin-bottom: 20px;
  color: #fff;
  font-size: 24px;

  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const FirstSectionH1 = styled.h1`
  color: #fff;
  font-size: 68px;
  text-align: center;
  font-family: ;

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }

  @media screen and (max-width: 480px) {
    font-size: 52px;
  }
`;

export const FirstSectionH2 = styled.h2`
  margin-top: 10px;
  color: #fff;
  font-size: 25px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
