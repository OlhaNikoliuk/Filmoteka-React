import styled from "@emotion/styled/macro";

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-top: 100px;
  width: 100%;
  max-width: 600px;
  /* border-bottom: 2px solid var(--main-color); */
  /* box-shadow: 9px 10px 8px 0px rgb(0 0 0 / 55%); */
  overflow: hidden;

  &::after {
    content: "";

    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;

    background-color: var(--main-color);
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background: transparent;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  border-radius: 5px;
  & > svg {
    fill: var(--main-color);
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-family: var(--main-font);
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;
  color: var(--main-color);
  font-weight: 500;

  &::placeholder {
    color: var(--main-color);
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 20px;
  }
`;
