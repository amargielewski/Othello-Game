import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px 0;
`;

export const StyledContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 25px;

  @media (max-width: 650px) {
    padding: 0 10px;
  }
`;
