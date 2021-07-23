import styled from "@emotion/styled/macro";

export const MovieCard = styled.li`
  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 460px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 5px 0 rgb(0 0 0 / 14%),
    0 2px 10px -1px rgb(0 0 0 / 12%);
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);
  }
`;

export const MovieTitle = styled.p`
  margin: 0;
  margin-top: 10px;
`;
