import styled from "@emotion/styled/macro";

export const MovieCard = styled.li`
  font-size: 16px;
  color: var(--white-color);
  transition: all 250ms ease-in-out;
  padding: 5px;

  border-radius: 5px;
  background-color: var(--main-color);
  & > a {
    text-decoration: none;
    color: inherit;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0px 5px 14px 2px rgba(0, 0, 0, 0.55);
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 355px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 2px 5px 0 rgb(0 0 0 / 14%),
    0 2px 10px -1px rgb(0 0 0 / 12%);
`;
export const DescWrap = styled.div`
  display: flex;
  padding: 0 5px;
  margin-top: 5px;
  align-items: baseline;
`;

export const MovieTitle = styled.span`
  display: inline-block;
  margin: 0;
  font-weight: 400;
`;

export const MovieRate = styled.span`
  display: inline-block;
  margin-left: auto;
  background-color: var(--accent-color);
  padding: 2px 10px;
  border-radius: 50%;
`;
