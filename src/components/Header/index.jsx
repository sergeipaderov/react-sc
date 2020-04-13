import React, { memo, useState } from 'react'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/icons/menu.svg'
import {
    HeaderStyled,
    LogoStyled,
    MenuContentStyled,
    MenuIconStyled,
    MenuStyled
} from './style'

function Header() {
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setShow(!show)
        console.log(show)
    }

    return (
        <HeaderStyled>
            <LogoStyled>
                <a href="#">
                    <img src={logo} alt="Logo" width="80px" />
                </a>
            </LogoStyled>
            <MenuContentStyled>
                <MenuIconStyled onClick={toggleMenu} src={menu} width="24px" />
            </MenuContentStyled>
            <MenuStyled show={show}>
                <li>
                    <a href="#sides">Sides</a>
                </li>
                <li>
                    <a href="#starters">Starters</a>
                </li>
                <li>
                    <a href="#steaks">Steaks</a>
                </li>
                <li>
                    <a href="#specials">Specials</a>
                </li>
                
                <li>
                    <a href="#entrees">Entrees</a>
                </li>
                <li>
                    <a href="#deserts">Deserts</a>
                </li>
                <li>
                    <a href="#joey_menu">Joey</a>
                </li>
            </MenuStyled>
        </HeaderStyled>
    )
}

export default memo(Header)