import React from 'react'
import { H1, Maincontainer, Rowdiv, Textdiv, Imgdiv, H2, P } from './About'

const Webshops = () => {
      return (
            <Maincontainer>
                  <Rowdiv>
                        <Textdiv>
                              <H1>WEBSHOPS</H1>
                              <H2>Webshop</H2>
                              <P>Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app.</P>
                              <H2>Ecommerce Website</H2>
                              <P>Start selling online with a dedicated ecommerce website. We’ll help coordinate your commerce goals with your platform and design a storefront that drives ongoing revenue for your business.</P>
                        </Textdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/ITConsulting5.jpg`} alt="site design"></img></Imgdiv>
                  </Rowdiv>
            </Maincontainer>
      )
}

export default Webshops

