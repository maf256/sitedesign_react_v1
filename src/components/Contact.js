import React from 'react'
import styled from 'styled-components'
import Phone from '../assets/img/phone-call.svg'
import whatsapp from '../assets/img/whatsapp.svg'
import email from '../assets/img/email.svg'
import facebook from '../assets/img/facebook.svg'
import instagram from '../assets/img/instagram.svg'
import linkedin from '../assets/img/linkedin.svg'
const Contact = () => {
      return (
            <ContactContainer>
                  <div >
                        <h1>Get in Touch Today</h1>
                        <p>Need a quote or just looking to say hi? Don’t be scared to send us a message!</p>
                        <h1>SITEDESIGN</h1>
                        <p>Address : Sandvika, Norway</p>
                        <a href="tel:+4740075666">
                              <img src={Phone}></img>&nbsp; &nbsp; Tlf:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  +47 400 75 666
                        </a>
                        <a href="https://wa.me/+4740075666">
                              <img src={whatsapp}></img>&nbsp; &nbsp;Whatsapp: +47 400 75 666
                        </a>
                        <a href="mailto:info@sitedesign.no">
                              <img src={email}></img>&nbsp; &nbsp; info@Sitedesign.no
                        </a>
                        <a href="https://www.facebook.com/sitedesign.no"><img src={facebook}></img></a>
                        <a href="https://www.instagram.com/sitedesign.no"><img src={instagram}></img></a>
                        <a href="https://www.linkedin.com/company/71210369"><img src={linkedin}></img></a>

                  </div>

            </ContactContainer>
      )
}

export default Contact

const ContactContainer = styled.div`
      min-height:500px;
      a{
            display: flex;
            align-items: center;
            text-decoration: none;
            color : black;

      }
      img {
            width: 35px;
            height: 35px;
      }
      img:hover {
            border: 1px solid black;
            
      }

`
