import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  position: relative;

  ::after {
    position: absolute;
    content: "";
    background: #fafafa10;
    width: 100%;
    height: 1px;
    bottom: 0;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;
