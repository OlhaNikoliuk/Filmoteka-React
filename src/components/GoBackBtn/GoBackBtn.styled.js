import styled from "@emotion/styled/macro";

export const Button = styled.button`
  /* margin-left: 40px; */
  margin-top: 10px;
  width: 50px;
  height: 30px;

  cursor: pointer;

  display: inline-block;
  outline: none;
  border: 1px solid #282c34;
  border-radius: 4px;

  transition: all 200ms linear;

  & > svg {
    fill: #282c34;
    transition: all 200ms linear;
  }

  &:hover,
  &:focus {
    border: 1px solid #2196f3;
    transform: scale(1.01);
    & > svg {
      fill: #2196f3;
    }
  }
`;
