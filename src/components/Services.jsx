import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Services = () => {
      return (
            <ServicesContainer>
                  <ServiceContainer>
                        <Link to="/ITconsulting">
                              <H1Services>IT Consulting</H1Services>
                              <PServices>
                                    We create the best connection between the customer’s needs and the IT solution that will meet the needs and also best suggestion for hardware. We helps you to choose the best solutions for accelerated growth of your business.
                              </PServices>
                        </Link>
                  </ServiceContainer>

                  <ServiceContainer>
                        <Link to="/WebDesign">
                              <H1Services>WebDesign</H1Services>
                              <PServices>
                                    Your website is more than just an online placeholder for your brand; it’s a powerful marketing tool. With the right web design, your site engages, informs, and calls visitors to action, all while staying true to your brand promise.                              </PServices>
                        </Link>

                  </ServiceContainer>
                  <ServiceContainer>
                        <Link to="/Wordpress">
                              <H1Services>WordPress</H1Services>
                              <PServices>
                                    WordPress is a free and open-source software written in PHP and paired with a MySQL or MariaDB database, Wordpress is a piece of software that allows you to easily manage content without writing code or learning programming.                              </PServices>
                        </Link>

                  </ServiceContainer>
                  <ServiceContainer>
                        <Link to="/Programming">
                              <H1Services>Programming</H1Services>
                              <PServices>
                                    We can made your websites from scratch.Fresh ideas, innovation, the latest technology. We know what works best: Originality, Sophistication, Creative and clean design, Functionality, UX & UI, Webdevelopment, Webdesign.                              </PServices>
                        </Link>

                  </ServiceContainer>
                  <ServiceContainer>
                        <Link to="/Webshops">
                              <H1Services>Webshops</H1Services>
                              <PServices>
                                    Start selling online with a dedicated ecommerce website. We’ll help coordinate your commerce goals with your platform and design a storefront that drives ongoing revenue for your business. Shop online                              </PServices>
                        </Link>

                  </ServiceContainer>
                  <ServiceContainer>
                        <Link to="/SEO">
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
    background-color: #ab9090;
    color: #333;
    height: auto;
    flex-wrap: wrap;
    padding: 7%;    
`

const ServiceContainer = styled.div`
    box-sizing: border-box;
    width: 320px;
    height: 340px;
    @media (max-width: 500px) {
      width: 300px;
      height: 310px;

}
    background-color: #d9c4c4;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    margin: 2vh 2vw;
    a{
        text-decoration: none;

    }
`

const H1Services = styled.h1`
    text-align: center;
    color: #a58d08; 
    margin: 4%;
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



// Eurobazzar.com with POLAR CHARGE AS / Validregnskapas.no with SOLID REGNSKAP AS / Narverud.no with NARVERUD EIENDOM AS / Soofirestaurant.no with SOOFI RESTAURANT & BAR AS / persiarestaurant.no with PERSIA CLASSIC AS / godthandverkas.no with GODT HÅNDVERK OSLO & AKERSHUS AS / Toyenblomster.no with Tøyens blomster fazel / artimismedicalbeauty.no with ARTIMIS MEDICAL BEAUTY / Privehairandbeauty.no with BJERKE FRISØR /