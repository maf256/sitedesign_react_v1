// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoSrc from '../assets/img/logo2626.png';
import routes from '../routes';
// react component state
// when you change the state, your component gets rerender


export default function Header() {
    const [hamContent, setHamContent] = useState('☰')
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
            // console.log(offset);
        }
    }, []);


    function onClickHam() {
        // if (title === "Services") return
        if (hamContent === "☰") {
            setHamContent('╳')
        } else {
            setHamContent('☰')
        }

    }

    return (
        <HeaderSection YOffset={offset}>
            <Link to="/"><Logo src={logoSrc} alt="site design logo" /></Link>
            <Navbar hamShow={hamContent}>
                {routes.map((item) => (
                    <li key={item.id}>
                        <Link onClick={item.title !== "Services" && onClickHam} to={item.path}>
                            {item.title}
                        </Link>
                        <ServicesMenu isShow={item.subMenu.length}>
                            {item.subMenu.map((subItem) => (
                                <li key={subItem.id}>
                                    <Link onClick={onClickHam} to={subItem.path}>
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

    ${({ YOffset }) => YOffset > 200 ?
        `height: 4rem; 
            color: white;
            background-color: #00000069;
            box-shadow: 0px 2px 5px rgb(0 0 0 / 10%);
            `
        :
        `height: 7rem; 
            color: black;
            background-color: #00000000;
            box-shadow: 0;
            `
    }
      transition: all .5s ease-in-out;
      position: fixed;
      overflow: visible;
      z-index: 1001;

`

const Logo = styled.img`
    width: 50px;
    height: 50px;
    /* background-color: black; */
    margin-left:10px;
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
        z-index:4;
        li a {
            font-size: 35px;
            text-decoration: none;
        }

    }
    list-style-type: none;
    /* background-color: black; */
    color: white;
    display: flex;
    padding-right: 20px;
    justify-content: space-between;
    li {
        padding: 0px 1vw;
    }
    a {
        letter-spacing : 1px;
        color: #e9d5d5;
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
    /* background: #6e2c2c; */
    background:#6a3093;
    padding: 10px;
    height: 320px;
    list-style: none;
    /* opacity: 0; */
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    transition: all 0.3s ease-in-out 0s, visibility 400ms ease-in-out 100ms, opacity 400ms ease-in-out 100ms, top 400ms ease-in-out 100ms;
    z-index: 1;
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
        z-index:30;
    }


`