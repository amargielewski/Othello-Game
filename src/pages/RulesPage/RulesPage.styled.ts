import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px 0;
`;

export const StyledRulesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  padding: 0 20px;
`;

export const StyledRuleTitle = styled.p`
  align-self: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  letter-spacing: 3px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledRuleItem = styled.div`
  display: flex;
  gap: 10px;

  position: relative;

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary_text}33;
    bottom: -10px;
  }
`;

export const StyledRuleText = styled.p`
  font-size: 25px;
  letter-spacing: 1.1px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const StyledRuleNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;

export const StyledGameObjectText = styled.p`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
`;
