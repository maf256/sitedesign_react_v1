import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import icon1Src from '../assets/img/IT Consulting.png';
import icon2Src from '../assets/img/webdesign.png';
import icon3Src from '../assets/img/wordpress.png';
import icon4Src from '../assets/img/programming.png';
import icon5Src from '../assets/img/webshop.png';
import icon6Src from '../assets/img/SEO.png';


const Services = () => {
      const scrollToTop = () => {

            window.scrollTo({

                  top: 0,

                  behavior: 'smooth'

            });

      };
      return (
            <ServicesContainer>
                  <ServiceContainer>
                        <Link onClick={scrollToTop} to="/ITconsulting">
                              <Imgicons src={icon1Src} alt="webdesign oslo sandvika"></Imgicons>
                              <H1Services>IT Consulting</H1Services>
                              <PServices>
                                    We create the best connection between the customer’s needs and the IT solution that will meet the needs and also best suggestion for hardware. We helps you to choose the best solutions for accelerated growth of your business.
                              </PServices>
                        </Link>
                  </ServiceContainer>

                  <ServiceContainer>
                        <Link onClick={scrollToTop} to="/WebDesign">
                              <Imgicons src={icon2Src} alt="webdesign oslo sandvika"></Imgicons>
                              <H1Services>WebDesign</H1Services>
                              <PServices>
                                    Your website is more than just an online placeholder for your brand; it’s a powerful marketing tool. With the right web design, your site engages, informs, and calls visitors to action, all while staying true to your brand promise.                              </PServices>
                        </Link>

                  </ServiceContainer>
                  <ServiceContainer>
                        <Link onClick={scrollToTop} to="/Wordpress">
                              <Imgicons src={icon3Src} alt="webdesign oslo sandvika"></Imgicons>
                              <H1Services>WordPress</H1Services>
                              <PServices>
                                    WordPress is a free and open-source software written in PHP and paired with a MySQL or MariaDB database, Wordpress is a piece of software that allows you to easily manage content without writing code or learning programming.                              </PServices>
                        </Link>

                  </ServiceContainer>
                  <ServiceContainer>
                        <Link onClick={scrollToTop} to="/Programming">
                              <Imgicons src={icon4Src} alt="webdesign oslo sandvika"></Imgicons>
                              <H1Services>Programming</H1Services>
                              <PServices>
                                    We can made your websites from scratch.Fresh ideas, innovation, the latest technology. We know what works best: Originality, Sophistication, Creative and clean design, Functionality, UX & UI, Webdevelopment, Webdesign.                              </PServices>
                        </Link>

                  </ServiceContainer>
                  <ServiceContainer>
                        <Link onClick={scrollToTop} to="/Webshops">
                              <Imgicons src={icon5Src} alt="webdesign oslo sandvika"></Imgicons>
                              <H1Services>Webshops</H1Services>
                              <PServices>
                                    Start selling online with a dedicated ecommerce website. We’ll help coordinate your commerce goals with your platform and design a storefront that drives ongoing revenue for your business. Shop online                              </PServices>
                        </Link>

                  </ServiceContainer>
                  <ServiceContainer>
                        <Link onClick={scrollToTop} to="/SEO">
                              <Imgicons src={icon6Src} alt="webdesign oslo sandvika"></Imgicons>
                              <H1Services>SEO</H1Services>
                              <PServices>
                                    (SEO) is the process of improving the quality and quantity of website traffic to a website from search engines. The tactic is to optimize to achieve the best possible visibility with the search engines on your products and services.                              </PServices>
                        </Link>

                  </ServiceContainer>

            </ServicesContainer>

      )
}

export default Services



const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    color: #333;
    height: auto;
    flex-wrap: wrap;
    padding: 7%;    
`

const ServiceContainer = styled.div`
    box-sizing: border-box;
    width: 320px;
    padding: 1rem;
    display: flex;
    text-align: center;
    @media (max-width: 500px) {
      width: 300px;
      height: 310px;

      }

      background-color: white;
      box-shadow: 0px 0px 3px 3px rgb(0 0 0 / 0.2);
      :hover {
            box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 0.2);
            transition: box-shadow 0.5s;
      }
      margin: 2vh 2vw;
    a{
        text-decoration: none;

    }
`

const H1Services = styled.h1`
    color: #214799; 
    margin: 0%;
    font-weight: bold;
    text-shadow: 1px 1px rgb(99 86 15);
    @media (max-width: 500px) {
      font-size: 22px;
  }
`
const PServices = styled.p`
    text-align: inherit;
    font-weight: bold;
    font-size: 20px;
    margin: 6%;
    line-height: 26px;
    color: black;
    @media (max-width: 500px) {
      font-size: 15px;
  }
`

const Imgicons = styled.img`
      width: 85px;
      height: auto;
`


