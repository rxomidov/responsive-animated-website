import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from "react-router-dom";
import {menuData} from "../data/MenuData";
import {Button} from "./Button";
import Bars from '../images/menu.svg'
import {FaChartBar} from "react-icons/all";


const Nav = styled.nav`
  height: 60px;
  background: red;
  display: flex;
  justify-content:space-between;
  padding: 1rem 2rem;
  position:fixed;
  z-index: 100;
  width: 100%;
  text-decoration:none;
`;
const NavLink = css`
  color:#fff;
  display:flex;
  align-items: center;
  padding: 0rem 1rem;
  height: 100%;
  cursor:pointer;
  text-decoration:none;
`

const Logo = styled(Link)`
  ${NavLink};
  font-style: italic;
`;
// const MenuBars = styled.FaBars``
const MenuBars = styled.i`
  display: none;
  
  @media screen and (max-width: 768px){
    display:block;
    background:url(${Bars});
    background-size: contain;
    height: 36px;
    width: 36px;
    cursor:pointer;
    position:absolute;
    top: 0;
    right: 0;
    transform: translate(-50%,32%); 
  }
`;
const NavMenu = styled.div`
  display:flex;
  align-items: center;
  
  @media screen and (max-width: 768px){
    display:none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink};
`;
const NavBtn = styled.div`
  display:flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px){
    display:none;
  }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">ELIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contacts" primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;