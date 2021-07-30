import styled from "@emotion/styled/macro";

export const MovieGall = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 30px;
  margin-top: 20px;
  margin: 0;
  padding: 0 20px;
  padding-top: 100px;

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
