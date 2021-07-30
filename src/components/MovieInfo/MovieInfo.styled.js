import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const MovieWrap = styled.div`
  display: flex;
  width: 1000px;
  height: 100%;
  margin-top: 100px;
  padding: 30px 20px 20px;
  background-color: var(--white-color);
  margin-left: auto;
  margin-right: auto;
  color: var(--accent-color);
  border-radius: 5px;
  border-bottom: 1px solid #2196f3;
`;

export const Image = styled.img`
  width: 250px;
  height: 400px;

  border-radius: 5px;
  margin-right: 30px;
`;

export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  font-size: 18px;
`;

export const MovieTitle = styled.h2`
  font-family: var(--title-font);
  color: var(--main-color);
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Info = styled.p`
  margin: 0;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 30px;
  }
`;
export const InfoName = styled.span`
  font-weight: 600;
`;

export const BtnWrap = styled.div`
  display: flex;
`;

export const InfoLink = styled(NavLink)`
  font-family: var(--title-font);

  font-size: 28px;
  line-height: 46px;
  text-align: center;
  text-decoration: none;

  font-weight: 500;
  color: var(--main-color);

  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    font-size: 30px;
    text-decoration: underline;
  }
`;
