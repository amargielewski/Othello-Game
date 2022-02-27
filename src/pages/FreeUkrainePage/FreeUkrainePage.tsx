import styled from "styled-components";

export const StyledFlag = styled.div`
  width: 220px;
  height: 147px;
  background-image: -webkit-linear-gradient(
    top,
    #005bbb 0,
    #005bbb 50%,
    #ffd500 50%,
    #ffd500 100%
  );
  background-image: linear-gradient(
    180deg,
    #005bbb 0,
    #005bbb 50%,
    #ffd500 50%,
    #ffd500 100%
  );
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;
  margin-bottom: 50px;
`;

export const FreeUkrainePage = () => {
  return (
    <StyledWrapper>
      <StyledFlag />
    </StyledWrapper>
  );
};
