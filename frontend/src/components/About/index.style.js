import styled from 'styled-components'

export const AboutContainer = styled.section`
  font-size: 1.1em;
  row-gap: 1em;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    row-gap: 1em;

    & > p {
      margin: 0;
      text-align: center;
      max-width: 65ch;
  
      & > a {
        color: #0275d8;

        &:hover {
          filter: brightness(0.5);
        }
      }
    }
  }

  & > img {
    height: 25vh;
    object-fit: cover;
    filter: brightness(0.5);
    width: 100%;
  }
` 