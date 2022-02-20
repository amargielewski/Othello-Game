import styled from "styled-components";
export const StyledGameBoard = styled.div`
  background-color: #21a179;
  border: 5px solid #fafafa;
  display: grid;
  grid-template-rows: repeat(8, 75px);
  grid-template-columns: repeat(8, 75px);
`;

export const StyledSingleCell = styled.div`
  width: 100%;
  padding: 5px;
`;
