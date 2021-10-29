// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoSrc from '../assets/img/logo2626.png';
import routes from '../routes';
// react component state
// when you change the state, your component gets rerender


export default function Header() {
    const [hamContent, setHamContent] = useState('☰')

    function onClickHam() {
        if (hamContent == "☰") {
            setHamContent('╳')
        } else {
            setHamContent('☰')
        }

    }

    return (
        <HeaderSection>
            <Link to="/test"><Logo src={logoSrc} alt="sitedesign logo" /></Link>
            <Navbar hamShow={hamContent}>
                {routes.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path}>
                            {item.title}
                        </Link>
                        <ServicesMenu isShow={item.subMenu.length}>
                            {item.subMenu.map((subItem) => (
                                <li key={subItem.id}>
                                    <Link to={subItem.path}>
                                        {subItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ServicesMenu>
                    </li>
                ))}
            </Navbar>
            <HamMenu onClick={onClickHam}>{hamContent}</HamMenu>
        </HeaderSection >
    )
}

const HeaderSection = styled.div`
    height: 70px;
    width: 100%;
    padding: 0px 10px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
    background-color: black;

`
const Navbar = styled.ul`
    @media (max-width: 750px) {
        display: ${({ hamShow }) => hamShow === "╳" ? "flex" : "none"};
        flex-direction: column;
        justify-content: space-evenly;
        background-color: #000000d9;
        align-items: center;
        width: 100vw;
        height: 100vh;
        padding: 0px;
        margin: 0px;
        position: absolute;
        top: 0;
        left: 0;
        li a {
            font-size: 35px;
        }

    }
    list-style-type: none;
    background-color: black;
    color: white;
    display: flex;
    padding-right: 20px;
    justify-content: space-between;
    li {
        padding: 0px 1vw;
    }
    a {
        letter-spacing : 1px;
        color: #c5baba;
        font-size : 1.1rem;
        text-decoration: none;
    }
    a:hover {
        color: white;
        font-style: bold;
      
    }

    li:hover  ul{
            visibility: visible;
    }

`
const ServicesMenu = styled.ul`
    display: ${({ isShow }) => isShow ? "flex" : "none"};
    flex-direction: column;
    align-items: baseline;
    justify-content: space-evenly;
    text-decoration: none;
    visibility: hidden;
    position: absolute;
    top: 60px;
    background: #6e2c2c;
    padding: 10px;
    height: 320px;
    /* opacity: 0; */
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    transition: all 0.3s ease-in-out 0s, visibility 400ms ease-in-out 100ms, opacity 400ms ease-in-out 100ms, top 400ms ease-in-out 100ms;
`
const HamMenu = styled.a`
    padding-right: 10px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    display: none;
    font-size: 30px;
    @media (max-width: 750px) {
        display: block;
        z-index:3;
    }


`