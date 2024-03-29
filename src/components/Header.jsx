
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoSrc from '../assets/img/logo3ny80.png';
import routes from '../routes';

export default function Header() {

    const scrollToTop = () => {

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });

    };


    const [hamContent, setHamContent] = useState('☰')
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', () => setOffset(window.pageYOffset))
        return () => {
            return (
                window.removeEventListener('resize', handleResize),
                window.removeEventListener('scroll', () => setOffset(window.pageYOffset))
            )
        }
    }, []);


    function onClickHam() {
        if (hamContent === "☰") {
            setHamContent('╳')
            { document.body.style.overflow = "hidden" }
        } else {
            setHamContent('☰')
            { document.body.style.overflow = "auto" }
        }

    }
    function onClick() {
        setHamContent('☰')
        { document.body.style.overflow = "auto" }
    }

    function handleResize() {
        if (window.innerWidth > 749 && hamContent === "╳") {

            setHamContent('☰')
            { document.body.style.overflow = "auto" }
        }

    }
    return (
        <HeaderSection YOffset={offset}>
            <Link onClick={() => scrollToTop()} to="/"><Logo src={logoSrc} alt="webdesign oslo sandvika" /></Link>
            <Navbar hamShow={hamContent}>
                {routes.map((item) => (
                    <li key={item.id}>
                        <Link onClick={() => { item.title !== "Services" && onClick(); scrollToTop(); }} to={item.path}>
                            {item.title}
                        </Link>
                        <ServicesMenu isShow={item.subMenu.length}>
                            {item.subMenu.map((subItem) => (
                                <li key={subItem.id}>
                                    <Link onClick={() => { onClick(); scrollToTop(); }} to={subItem.path}>
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
    padding: 0px 30px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ YOffset }) => YOffset > 200 ?
        `   height: 4rem; 
            color: white;
            background-color: #ffffffcc;
            box-shadow: 0px 2px 5px rgb(0 0 0 / 10%);
        `
        :
        `   height: 7rem; 
            color: black;
            background-color: #00000000;
            box-shadow: 0;
        `
    }
      transition: all .5s ease-in-out;
      position: fixed;
      z-index: 1001;

`

const Logo = styled.img`
    width: 70px;
    height: 70px;
    margin-left:10px;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }  
`
const Navbar = styled.ul`
    @media (max-width: 750px) {
        display: ${({ hamShow }) => hamShow === "╳" ? "flex" : "none"};
        flex-direction: column;
        justify-content: space-evenly;
        background-color: #525151d9;
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
    display: flex;
    padding-right: 20px;
    justify-content: space-between;
    li {
        padding: 0px 1vw;
    }
    a {
        letter-spacing : 1px;
        color: black ;
        font-weight: 600;
        font-size : 1.1rem;
        text-decoration: none;
    }
    a:hover {
      border-bottom: 2px solid;
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
    top: 66px;
    background:#C0C0C0;
    padding: 10px;
    height: 320px;
    list-style: none;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    transition: all 0.3s ease-in-out 0s, visibility 400ms ease-in-out 100ms, opacity 400ms ease-in-out 100ms, top 400ms ease-in-out 100ms;
    z-index: 1;
`
const HamMenu = styled.span`
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