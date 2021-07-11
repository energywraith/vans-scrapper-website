import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 10em;
  align-self: flex-end;
  padding-right: 1em;

  @media(max-width: 600px) {
    width: calc(100% - 2em);
  }
` 