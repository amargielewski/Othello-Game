import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  position: relative;
  border: 1px solid #fafafa10;
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
  }
`;

export const StyledTitle = styled(Link)`
  font-size: 40px;
  font-weight: 700;
  text-decoration: none;
  color: #fafafa;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 30px;
  } ;
`;

export const StyledLinkContainer = styled.div<{
  toggleVisibility: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0 50px;

  @media (max-width: 650px) {
    z-index: 5;
    position: absolute;
    padding: 10px 0;
    left: 0;
    bottom: -100%;
    background-color: #21295c;
    width: 100%;
    justify-content: center;
    &.entering {
      opacity: 0;
      transform: translateY(-200%);
      transition: all 300ms ease-in-out;
    }
    &.entered {
      opacity: 1;
      transform: translateY(0);
      transition: all 300ms ease-in-out;
    }
    &.exiting {
      opacity: 0;
      transform: translateY(-200%);
      transition: all 300ms ease-in-out;
    }

    &.exited {
      opacity: 0;
      transform: translateY(0);
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

  @media (max-width: ${breakpoints.s}px) {
    font-size: 20px;
    padding: 5px 10px;
  }

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
  display: none;
  font-size: 30px;

  @media (max-width: ${breakpoints.s}px) {
    display: block;
  }
`;
