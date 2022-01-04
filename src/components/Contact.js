import React from 'react'
import styled from 'styled-components'
import Phone from '../assets/img/phone-call.svg'
import whatsapp from '../assets/img/whatsapp.svg'
import email from '../assets/img/email.svg'
import landing from '../assets/img/contactus.svg'

const Contact = () => {
      return (
            <ContactContainer>
                  <div >
                        <h1>Get in Touch Today</h1>
                        <p>Need a quote or just looking to say hi? Don’t be scared to send us a message!</p>
                        <h1>SITEDESIGN</h1>
                        <p>Address : Sandvika, Norway</p>
                        <a href="tel:+4740075666">
                              <Icon src={Phone} alt="webdesign oslo sandvika" ></Icon>&nbsp; &nbsp; Tlf:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  +47 40075666
                        </a>
                        <a href="https://wa.me/+4740075666">
                              <Icon src={whatsapp} alt="webdesign oslo sandvika" ></Icon>&nbsp; &nbsp;Whatsapp: +47 40075666
                        </a>
                        <a href="mailto:info@sitedesign.no">
                              <Icon src={email} alt="webdesign oslo sandvika" ></Icon>&nbsp; &nbsp; info@Sitedesign.no
                        </a>
                  </div>
                  <Landingimg src={landing} alt="webdesign oslo sandvika"></Landingimg>

            </ContactContainer>
      )
}

export default Contact

const ContactContainer = styled.div`
      max-width: 100vw;
      padding: 200px 50px;
      padding-top: 150px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      min-height: 90vh;
      background-color: #DCDCDC;
      p {
            font-size: 18px;
            font-weight: bold;
            line-height: 27px;
      }
      h1 {
            color: #214799;
            text-shadow: 1px 1px #6994f0;
            font-size:45px;
      }
      a{
            display: flex;
            align-items: center;
            text-decoration: none;
            color : black;    
            border-left: 4px solid #DCDCDC;
            width: 250px;
      }
      a:hover {
            border-left: 4px solid black;

      }

`

const Icon = styled.img`
      width: 35px;
      height: 35px;
      img:hover {
            border: 1px solid black;
            
      }
`
const Landingimg = styled.img`
      min-width:300px;
      width: 45vw;
      height: 45vh;
      padding-top: 10px;



`