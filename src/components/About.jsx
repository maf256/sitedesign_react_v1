import React from 'react'
import styled from 'styled-components'

const About = () => {
      return (
            <Aboutcontainer>
                  <Rowdiv>
                        <Textdiv>
                              <H1>WHO WE ARE</H1>
                              <H2>Our goal is simple, to provide exceptional resources for your projects at a fair price.</H2>
                              <H2>We believe in the power of the individual to make great things.</H2>
                              <P>We're SITEDESIGN team. Our mission is to help people with creative ideas stand out and succeed. We create a modern platform that enables millions to build a brand, share their stories, and transact with their customers in an impactful and beautiful online presence. Our services are : IT Consulting, Website, Webshop, Programming, Wordpress, SEO, Digital marketing, Graphic design.</P>
                        </Textdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/ablout.jpg`}></img></Imgdiv>
                  </Rowdiv>
                  <Rowdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/aboutus2.jpg`}></img></Imgdiv>
                        <Textdiv>
                              <H2>OUR STORY</H2>
                              <P>SITE DESIGN team, a fast scaling start-up that has been based in the heart of Sandvika, Norway since 2018. Having a design, programming background, the founders realized how to improve and change the way people consume digital assets.</P>
                              <H2>Engaging and user-friendly website for business</H2>
                              <P>We deliver websites to companies throughout the country, with the customer groups in Sandvika and Oslo. All our deliveries have a responsive design, are universally designed , and have a modern web design . We also perform  system development , integrations and special customizations so that you are never locked into a specific setup or template.</P>
                        </Textdiv>
                  </Rowdiv>
                  <Rowdiv>
                        <Textdiv>
                              <H2>We provide smart solutions</H2>
                              <P>We make it easy for you to maintain your website yourself. Our solutions are scalable so that the website can be designed according to the needs of your company at all times. By using a page builder and CMS, the appearance of your website can be changed based on user patterns or needs in a simple and cost-effective way. Most of our customers can maintain and develop their new website themselves. The user interface for administration is simple and easy to understand without the need for knowledge of code.</P>
                        </Textdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/aboutus3.jpg`}></img></Imgdiv>
                  </Rowdiv>
                  <Rowdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/aboutus4.jpg`}></img></Imgdiv>
                        <Textdiv>
                              <H2>Recognized CMS</H2>
                              <P>Wordpress accounts for 60% of the market. In second place we find other CMS. Over the years, we have used the two most well-known platforms for website development - WordPress and Joomla. We have developed a number of different solutions, which cover very different needs. In recent years, we have focused on WordPress. WordPress is a solution that makes it quick to implement a new website. Opportunity for fantastic design and a number of plug-ins makes many customers prefer WordPress.</P>
                        </Textdiv>
                  </Rowdiv>
                  <Rowdiv>
                        <Textdiv>
                              <H2>Responsive design</H2>
                              <P>Did you know that 70% of users who visit your website use a smartphone? "Mobile first" - by that we mean that your website design should be as good on mobile as on desktop. Your customers will find all available information, on all screen sizes. When using responsive design, navigation and readability will work the same on all devices such as mobile, iPad, laptop and desktop.</P>
                        </Textdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/aboutus5.jpg`}></img></Imgdiv>
                  </Rowdiv>

            </Aboutcontainer>
      )
}

export default About

const Aboutcontainer = styled.div`
      padding-top: 20px;
      background-color: #dbdad5;
`

const Rowdiv = styled.div`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 90%;
`

const Textdiv = styled.div`
      width: 550px;
      max-width: 100vw;
      padding: 0px 10px;
`

const Imgdiv = styled.div`
      max-width: 100vw;
      min-width: 300px;
      img {
            max-width: 550px;
            min-width: 300px;
            object-fit: cover;


      }
`

const H1 = styled.h1` 
      color: #998100;
      text-shadow: 2px 2px #ffd700;
      font-size: 28px;
      line-height: 25px;
      margin-top: 2px;
`

const H2 = styled.h2`  
      font-size: 24px;
      margin-top: 3px;
      font-weight: 100;
      
`
const P = styled.p`  
      font-size: 16px;
      line-height: 27px;
      margin-top: 2px;

`