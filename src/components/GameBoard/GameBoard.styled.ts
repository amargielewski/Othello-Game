import styled from "styled-components";

export const StyledGameBoard = styled.div`
  background-color: #21a179;
  border: 5px solid #fafafa;
  display: grid;
  grid-template-rows: repeat(8, 75px);
  grid-template-columns: repeat(8, 75px);
`;

export const StyledCountContainer = styled.div`
  display: flex;
  gap: 0 20px;
  font-size: 20px;
  padding: 10px;
`;

export const StyledCountWhiteBox = styled.div``;
export const StyledCountBlackBox = styled.div``;

export const StyledCurrentMoveName = styled.h2`
  font-size: 35px;
`;
