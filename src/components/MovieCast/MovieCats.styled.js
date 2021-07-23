import styled from "@emotion/styled/macro";

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 15px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 15px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Actor = styled.li`
  border: 1px solid #ededed;
  border-radius: 4px;
  text-align: center;
  padding-bottom: 5px;
`;

export const ActorImg = styled.img`
  width: 100%;
  height: 275px;
  border-radius: 5px;
`;
export const Name = styled.p`
  margin: 0;
  font-weight: 600;
`;
export const Character = styled.p`
  margin: 0;
`;
