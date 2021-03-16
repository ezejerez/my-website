import styled from 'styled-components';

export const SocialFollowIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* Contenedor de cada icon */
  > a {
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      transform: translate(-100%, 60%);
    }
    cursor: pointer;
    color: #fff;
  }

  > a:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }

  /* 
    Icon (metemos el width y height aca porque los contenedores si
    no le seteas el tamaño, se adaptan al tamaño del hijo)
  */
  > a > svg {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
`;
