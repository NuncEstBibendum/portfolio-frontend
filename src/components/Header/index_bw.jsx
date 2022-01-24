import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LogoBlanc from '../../assets/logo_blanc.svg';

const menuGradient = keyframes`
    0% {
        background-position: 0% 0%;
    }
    25% {
        background-position: 25% 75%;
    }
    50% {
        background-position: 100% 100%;
    }
    75% {
        background-position: 75% 25%;
    }
    100% {
        background-position: 0% 0%;
    }
`

const logoGradientAnimation = keyframes`
    0% {
        path: orange;
    }
    25% {
        background-position: 25% 75%;
    }
    50% {
        background-position: 100% 100%;
    }
    75% {
        background-position: 75% 25%;
    }
    100% {
        background-position: 0% 0%;
    }
`

const Container = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    margin: 0 auto;
    height: 80px;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color ease-in-out 300ms;
    border-bottom: 1px solid #fff;
`

const NavImg = styled.svg`
    width: 85px;
    height: 50px;
    position: absolute;
    top: 15px;
    left: 15px;
    path {
        animation: ${logoGradientAnimation} 3s infinite ease-in-out;
    }
`

const Nav = styled.nav`
`

const NavToggle = styled.div`
    display: block;
    position: absolute;
    top: 27px;
    right: 27px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        
        cursor: pointer;
        
        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */
        
        -webkit-touch-callout: none;
        &:checked ~ span {
            opacity: 1;
            transform: rotate(45deg) translate(-11px, -14px);
            background: #fff;
            &:nth-child(2) {
                transform: rotate(-45deg) translate(-12px, 12px);
            }
            &:nth-last-child(3) {
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }
        }
        &:checked ~ ul {
            transform: none;
        }

    }   
    span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        
        background: #fff;
        background-size: 400% 400%;
        animation: ${menuGradient} 15s infinite;
        border-radius: 3px;
        
        z-index: 1;
        
        transform-origin: 4px 0px;
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
        &:first-child {
            transform-origin: 0% 0%;
        }

        &nth-last-child(2) {
            transform-origin: 0% 100%;
        }
    }
`

const NavLinks = styled.ul`
    position: fixed;
    top:30px;
    right:30px;
    width: 100vw;
    height: 100vh;
    margin: -30px -30px 0 0;
    padding: 50px 50px 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    
    background: #000;
    animation-name: ${menuGradient};
    animation-duration: 15s;
    animation-iteration-count: infinite;

    transform-origin: 0% 0%;
    transform: translateX(100%);

    background-size: 400% 400%;
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    p {
        color: #fff;
        font-family: Outfit;
        font-size: 0.8rem;
        position: absolute;
        text-align: center;
        bottom: 20px;
        left:50%;
        transform: translateX(-50%);
        width:100%;
        opacity: 0.8;
    }
`

const LogoToggleMenu = styled.img`
    width: 85px;
    height: 50px;
    position: absolute;
    top: 15px;
    left: 15px;
    opacity: 0;
    transition: opacity ease-in-out 700ms;
`

const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    opacity: 0;
    transition: opacity ease-in-out 700ms;

    li {
        font-family: 'Outfit';
        font-size: 13vw;
        text-align: center;
        font-weight: 500;
        line-height: 1;
        @media (min-width: 650px) {
            font-size: 5.2rem;
            line-height: 1;
        }
    }

    div:nth-child(1) li {
        transform: translateY(0%) rotateX(0deg);
        transform-origin: bottom;
        transform-style: preserve-3d;
        transition: transform ease 500ms;
    }

    div:nth-child(2) li {
        font-family: 'Playfair Display';
        transform: translateY(0) rotateX(-90deg);
        transform-origin: top;
        transform-style: preserve-3d;
        transition: transform ease 500ms;
    }

    &:hover > div:nth-child(1) li {
        transform: translateY(-100%) rotateX(-90deg);
    }

    &:hover > div:nth-child(2) li {
        transform: translateY(-100%) rotateX(0deg);
    }
`

function Header() {
    // Watch the distance of scroll from the top of the window
    const [scrollTop, setScrollTop] = useState(0);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    // useEffect to trigger the opacity of the navbar when scrolling
    useEffect(() => {
        const revealOnScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
            if(scrollTop > 100) {
                document.getElementById('navbar-container').style.backgroundColor = 'rgba(255, 255, 255, 1)';
            } else {
                document.getElementById('navbar-container').style.backgroundColor = 'rgba(255, 255, 255, 0)';
            }
        };
        window.addEventListener('scroll', revealOnScroll);
        return() => window.removeEventListener('scroll', revealOnScroll);
    }, [scrollTop]);

    // toggle the opacity of the elements of the menu
    function revealMenu() {
        setMenuIsOpen(!menuIsOpen);
        const navigationLinks = document.querySelectorAll('.nav__link');
        const navLogo = document.getElementById('navLogo');
        if (!menuIsOpen) {
            navigationLinks.forEach((link) => {
                link.style.opacity = "1";
            })
            navLogo.style.opacity = "1";
        } else {
            navigationLinks.forEach((link) => {
                link.style.opacity = "0";
            })
            navLogo.style.opacity = "0";
        }
    }

    function hideMenu() {
        revealMenu();
        document.getElementById('menu-checkbox').checked = false;
    }



    return(
        <Container id="navbar-container">
            <Nav>
                <Link to="/">
                <NavImg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 793 505" width='200' height='100'>
                    <defs>
                    <linearGradient id="logoGradient" x1="0" x2="0.75" y1="1" y2="0.33">
                        <stop offset="0%" stop-color="#ee7752">
                            <animate dur="25s" attributeName="stop-color" repeatCount='indefinite' values="#ee7752;#ee7752;#e73c7e;#23a6d5;#23d5ab;#23d5ab;#23a6d5;#e73c7e;#ee7752" />
                        </stop>
                        <stop offset="100%" stop-color="#ee7752">
                            <animate dur="25s" attributeName="stop-color" repeatCount='indefinite' values="#ee7752;#23d5ab;#23a6d5;#e73c7e;#e73c7e;#23a6d5;#23d5ab;#ee7752" />
                        </stop>
                        <animate dur="15s" attributeName="x2" repeatCount='indefinite' values="0;0.1;0.2;0.3;0.4;0.4;0.3;0.2;0.1;0" />
                    </linearGradient>
                    </defs>
                    <path stroke-width="0" id="cls-1" d="M770.91,21.09A71.77,71.77,0,0,0,720,0H72A72,72,0,0,0,0,72V432a72,72,0,0,0,72,72H720a72,72,0,0,0,72-72V72A71.77,71.77,0,0,0,770.91,21.09ZM720,144H576a72,72,0,0,0-72,72v72a72,72,0,0,0,144,0H576V216H720V432H432V144H216a72,72,0,0,0-72,72v72a72,72,0,0,0,144,0H216V216H360V432H72V72H720Z" transform="translate(0.5 0.5)" fill='#fff' stroke="url(#logoGradient)" />
                </NavImg>
                </Link>
                <NavToggle>
                    <input id="menu-checkbox" type="checkbox" onClick={() => setTimeout(() => {revealMenu()}, 300)}/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <NavLinks>
                        <Link to="/" onClick={() => hideMenu()}>
                            <LogoToggleMenu id="navLogo" src={LogoBlanc} alt="logo" />
                        </Link>
                        <NavLink className="nav__link" to="/portfolio" onClick={() => hideMenu()}>
                            <div><li className="li1">Portfolio</li></div>
                            <div><li className="li2">Portfolio</li></div>
                        </NavLink>
                        <NavLink className="nav__link" to="/about" onClick={() => hideMenu()}>
                            <div><li className="li1">About</li></div>
                            <div><li className="li2">About</li></div>
                        </NavLink>
                        <NavLink className="nav__link" to="/contact" onClick={() => hideMenu()}>
                            <div><li className="li1">Contact</li></div>
                            <div><li className="li2">Contact</li></div>
                        </NavLink>
                        <p>Fait avec ❤ par Julien Grangé-Guermente</p>
                    </NavLinks>
                </NavToggle>
            </Nav>
        </Container>
    )
}

export default Header;