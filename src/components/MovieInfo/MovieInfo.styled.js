import styled from "@emotion/styled/macro";

export const MovieWrap = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #2196f3;
`;

export const Image = styled.img`
  width: 250px;
  height: 100%;

  border-radius: 5px;
  margin-right: 30px;
`;

export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;
export const MovieTitle = styled.h2``;
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
