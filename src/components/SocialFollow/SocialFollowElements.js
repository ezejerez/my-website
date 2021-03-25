import styled from 'styled-components';

export const SocialFollowIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > a {
    cursor: pointer;
    color: #fff;

    &:hover {
      color: #01bf71;
      transition: 0.2s ease-in-out;
    }
  }

  > a > svg {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
`;
