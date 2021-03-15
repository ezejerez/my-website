import styled from 'styled-components';

export const SocialFollowIconsContainer = styled.div`
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* Contenedor de cada icon */
  > a {
    cursor: pointer;
    color: red;
  }

  /* Cuando pasas el mouse encima del contenedor */
  > a:hover {
    color: blue;
  }

  /* 
    Icon (metemos el width y height aca porque los contenedores si
    no le seteas el tamaño, se adaptan al tamaño del hijo)
  */
  > a > svg {
    width: 50px;
    height: 50px;
  }
`;
