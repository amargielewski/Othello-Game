import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary_background};
  gap: 50px 0;
  min-height: 100vh;
`;

export const StyledContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 25px;
  flex: 1;

  @media (max-width: ${breakpoints.s}px) {
    padding: 0 10px;
  }
`;
