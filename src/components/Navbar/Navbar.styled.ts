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
`;

export const StyledTitle = styled(Link)`
  font-size: 40px;
  font-weight: 700;
  text-decoration: none;
  color: #fafafa;
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 50px;
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
    color: #001427;
  }

  :hover {
    background-color: #fafafa;
    color: #001427;
  }
`;

export const StyledMenuLinkText = styled.p`
  font-size: 24px;
`;
