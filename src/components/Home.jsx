import styled from 'styled-components'
import SrsHomeImage from '../assets/img/sitedesign-landing.svg'
import Services from './Services'



export default function Home() {

    return (
        <>
            <HomeTopSection>
                <h1>Welcome to Sitedesign</h1>
                <img src={SrsHomeImage} alt="website design sandvika" />
            </HomeTopSection>
            <Services />
        </>

    )
}

const HomeTopSection = styled.div`
    width: 100%;
    height: calc((30vw + 200px));
    padding: 0px auto;
    display: flex;
    align-items: center;
    background-color:#6667ab ;
    h1 { 
        width: 50%;
        font-family: "Dancing Script", cursive;
        text-shadow: 2px 2px #aca7a7;
        padding-bottom: 10%;
        padding-left: 8%;
        color: rgb(27, 22, 22);
        font-size: 6.5vw;
    }
    img {
        width: 40vw;
        height: 40vw;
    }
`

