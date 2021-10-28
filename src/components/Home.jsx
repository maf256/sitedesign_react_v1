import styled from 'styled-components'
import SrsHomeImage from '../assets/img/sitedesign-landing.svg'
import { Link } from 'react-router-dom'


export default function Home() {

    return (
        <>
            <HomeTopSection>
                <h1>Welcome to Sitedesign</h1>
                <img src={SrsHomeImage} alt="sitedesign" />
            </HomeTopSection>\
            <ServicesContainer>
                <ServiceContainer>
                    <Link to="/test">
                        <H1Services>IT Consulting</H1Services>
                        <PServices>
                            We create the best connection between the customer’s needs and the IT solution that will meet the needs and also best suggestion for hardware. We helps you to choose the best solutions for accelerated growth of your business.
                        </PServices>
                    </Link>
                </ServiceContainer>

                <ServiceContainer>
                    <Link to="/test">
                        <H1Services>Programming</H1Services>
                        <PServices>
                            We can made your websites from scratch.Fresh ideas, innovation, the latest technology. We know what works best: Originality, Sophistication, Creative and clean design, Functionality, UX &amp; UI, Webdevelopment, Webdesign.
                        </PServices>
                    </Link>

                </ServiceContainer>
                <ServiceContainer>
                    <Link to="/test">
                        <H1Services>Wordpress</H1Services>
                        <PServices>
                            WordPress&nbsp;is a free and open-source software written in&nbsp;PHP and paired with a&nbsp;MySQL&nbsp;or&nbsp;MariaDB&nbsp;database, Wordpress is a piece of software that allows you to easily manage content without writing code or learning programming.
                        </PServices>
                    </Link>

                </ServiceContainer>
                <ServiceContainer>
                    <Link to="/test">
                        <H1Services>SEO</H1Services>
                        <PServices>
                            (SEO) is the process of improving the quality and quantity of&nbsp;website traffic&nbsp;to a&nbsp;website from&nbsp;search engines. The tactic is to optimize to achieve the best possible visibility with the search engines on your products and services.
                        </PServices>
                    </Link>

                </ServiceContainer>
                <ServiceContainer>
                    <Link to="/test">
                        <H1Services>IT Consulting</H1Services>
                        <PServices>
                            We create the best connection between the customer’s needs and the IT solution that will meet the needs and also best suggestion for hardware. We helps you to choose the best solutions for accelerated growth of your business.
                        </PServices>
                    </Link>

                </ServiceContainer>
                <ServiceContainer>
                    <Link to="/test">
                        <H1Services>IT Consulting</H1Services>
                        <PServices>
                            We create the best connection between the customer’s needs and the IT solution that will meet the needs and also best suggestion for hardware. We helps you to choose the best solutions for accelerated growth of your business.
                        </PServices>
                    </Link>

                </ServiceContainer>
                <ServiceContainer>
                    <Link to="/test">
                        <H1Services>IT Consulting</H1Services>
                        <PServices>
                            We create the best connection between the customer’s needs and the IT solution that will meet the needs and also best suggestion for hardware. We helps you to choose the best solutions for accelerated growth of your business.
                        </PServices>
                    </Link>

                </ServiceContainer>
                <ServiceContainer>
                    <Link to="/test">
                        <H1Services>IT Consulting</H1Services>
                        <PServices>
                            We create the best connection between the customer’s needs and the IT solution that will meet the needs and also best suggestion for hardware. We helps you to choose the best solutions for accelerated growth of your business.
                        </PServices>
                    </Link>

                </ServiceContainer>

            </ServicesContainer>
        </>

    )
}

const HomeTopSection = styled.div`
    width: 100%;
    height: calc((30vw + 200px));
    padding: 0px auto;
    display: flex;
    align-items: center;
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

const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #ddd;
    color: #333;
    height: auto;
    flex-wrap: wrap;
    padding: 7%;    
`

const ServiceContainer = styled.div`
    box-sizing: border-box;
    width: 320px;
    height: 340px;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    margin: 2vh 2vw;
    a{
        text-decoration: none;

    }
`

const H1Services = styled.h1`
    text-align: center;
    color: #ffd700; 
    margin: 4%;
    font-weight: bold;
    text-shadow: 1px 1px #b29600;
`
const PServices = styled.p`
    text-align: inherit;
    font-weight: bold;
    font-size: 20px;
    margin: 6%;
    line-height: 26px;
    color: black;
`

