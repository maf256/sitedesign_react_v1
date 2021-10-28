import styled from 'styled-components'
// import Logo from './Header'
import { Link } from 'react-router-dom'
import logoSrc from '../assets/img/logo.jpg';
import logo1Src from '../assets/img/facebook.svg';
import logo2Src from '../assets/img/instagram.svg';
import logo3Src from '../assets/img/linkedin.svg';
import logo4Src from '../assets/img/email.svg';
import logo5Src from '../assets/img/phone-call.svg';

export default function Footer() {

    return (
        <Footersection>
            <div>
                <ATag to="/test"><Logo src={logo1Src} alt="sitedesign logo" /></ATag>
                <ATag to="/test"><Logo src={logo2Src} alt="sitedesign logo" /></ATag>
                <ATag to="/test"><Logo src={logo3Src} alt="sitedesign logo" /></ATag>
                <ATag to="/test"><Logo src={logo4Src} alt="sitedesign logo" /></ATag>
                <ATag to="/test"><Logo src={logo5Src} alt="sitedesign logo" /></ATag>
            </div>
            <div>
                <h1>© 2018 All rights reserved by : <ATag to="/">Sitedesign</ATag></h1>
            </div>

        </Footersection>
    )

}


const Footersection = styled.div`
    background-color: #c0c0c0;
    width: 100%;
    height: auto;
    margin: auto;

    div {
        display: flex;
    justify-content: center;
        width: 100%;
        height: 50px;
    }
    h1 {
        margin: auto;
        font-size: 16px;
        a {
            text-decoration: none;
            color: #312424;
        }
    }
`

const Logo = styled.img`
    width: 35px;
    height: 35px;
    margin: 5px;
    border : 1px solid #c0c0c0; 

    :hover {
        border : 1px solid black; 
    }
`
const ATag = styled(Link)`
    width: 35px;
    height: 35px;
    margin: 5px;
    
`
