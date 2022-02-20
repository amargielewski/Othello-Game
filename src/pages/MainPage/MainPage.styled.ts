import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;
  margin-bottom: 50px;
`;

export const StyledPageTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
`;

export const StyledGameBoard = styled.div`
  background-color: #21a179;
  border: 10px solid #fafafa;
  display: grid;
  grid-template-rows: repeat(8, 75px);
  grid-template-columns: repeat(8, 75px);
`;

export const StyledSingleCell = styled.div`
  width: 100%;
  background-color: red;
`;
