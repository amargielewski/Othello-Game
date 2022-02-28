import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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

export const StyledMenuContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 650px) {
    padding: 0 10px;
    flex-direction: column;
    gap: 30px 0;
  }
`;

export const StyledTitle = styled(Link)`
  font-size: 40px;
  font-weight: 700;
  text-decoration: none;
  color: #fafafa;
`;

export const StyledLinkContainer = styled.div<{
  toggleVisibility: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0 50px;

  @media (max-width: 650px) {
    &.entering {
      opacity: 0;
      transform: translateY(-200%);
      transition: all 300ms ease-in-out;
    }
    &.entered {
      transform: translateY(0);
      transition: all 300ms ease-in-out;
    }
    &.exiting {
      transform: translateY(0);
      transition: all 300ms ease-in-out;
    }

    &.exited {
      transform: translateY(-200%);
      opacity: 0;
      display: none;
      transition: all 300ms ease-in-out;
    }
  }
`;

export const StyledMenuLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0 10px;
  color: #fafafa;
  font-size: 24px;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 400;
  transition: 0.7s;

  &.active {
    background-color: #fafafa;
    color: #21295c;
  }

  :hover {
    background-color: #fafafa;
    color: #21295c;
  }
`;

export const StyledMenuLinkText = styled.p`
  font-size: 24px;
`;

export const StyledTitleContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const StyledMenuToggleButton = styled.div`
  font-size: 40px;
  display: none;

  @media (max-width: 650px) {
    display: block;
  }
`;
