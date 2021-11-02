import React from 'react'
import { H1, Maincontainer, Rowdiv, Textdiv, Imgdiv, H2, P } from './About'

const Website = () => {
      return (
            <Maincontainer>
                  <Rowdiv>
                        <Textdiv>
                              <H1>WEBSITES</H1>
                              <H1></H1>
                              <H2>Our Web Design Services</H2>
                              <P>Your website is more than just an online placeholder for your brand; it’s a powerful marketing tool. With the right web design, your site engages, informs, and calls visitors to action, all while staying true to your brand promise.</P>
                              <H2>Web Design & Development Services</H2>
                              <P>What does your website do for you? Does it engage visitors? Does it tell your story and demonstrate your brand’s value? Does it add value? Whether you need to improve sales or reputation, revitalize an aging website or build a new one from scratch, The Konsulenthus offers comprehensive web design and development services to help you better connect with your customers.</P>
                        </Textdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/ITConsulting3.jpg`}></img></Imgdiv>
                  </Rowdiv>
            </Maincontainer>
      )
}

export default Website

