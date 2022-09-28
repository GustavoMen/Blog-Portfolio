import styled from "styled-components";
import { DiMagento } from "react-icons/di";
import Link from "next/link";

export const Nav = styled.nav`
  align-items: center;
  height: 80px;
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const NavIcon = styled(DiMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(71, 70, 70, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
  }
`;

export const NavItem = styled.span`
  margin-left: 32px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.6s ease;
  &:hover {
    color: #57bdd1;
  }
  @media screen and (max-width: 960px) {
    margin-left: 0;
    font-size: 28px;
    text-align: center;
  }
`;

export const NavItemContainer = styled.div`
  @media screen and (max-width: 960px) {
    margin-top: 16px;
  }
`;
