import React from 'react'
import { H1, Maincontainer, Rowdiv, Textdiv, Imgdiv, H2, P } from './About'

const Programming = () => {
      return (
            <Maincontainer>
                  <Rowdiv>
                        <Textdiv>
                              <H1>Programming</H1>
                              <H2>BUILDING A WEBSITE FROM SCRATCH – WHAT DOES IT MEAN?</H2>
                              <P>A Website from scratch is a custom designed and hand-coded website. So making a website from scratch is simply means that the site is meticulously constructed according to the clients’ needs, and their specific business requirements.</P>
                              <P>Websites have become more than just simple marketing tools for businesses. Nowadays, people can use them for virtually anything, ranging from socializing and meeting friends to passing information, trading, teaching and many more. There are various website builders, that could be used to create simple up and running websites. However, those web builders have their shortcomings and present many disadvantages. That is the reason why hand-coding or developing a website from scratch, (CMS based) is strongly recommended to business owners or professionals who are looking to build outstanding ones for their business or themselves.</P>
                        </Textdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/programing1.jpg`} alt="site design"></img></Imgdiv>
                  </Rowdiv>
                  <Rowdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/programing2.jpg`} alt="site design"></img></Imgdiv>
                        <Textdiv>
                              <H1>ADVANTAGES OF CREATING A SITE FROM SCRATCH</H1>
                              <ul>
                                    <li><P>The website gets its own unique custom UI\UX design and code (which can increase sales significantly).</P></li>
                                    <li><P>No ads will clutter the site.</P></li>
                                    <li><P>The site comes with its own unique domain name (which will positively affect the growth of your brand).</P></li>
                                    <li><P>The website will be optimized for search engines, which will speed up page loading.</P></li>
                                    <li><P>The site can easily be tweaked to reap the benefits of SEO.</P></li>
                                    <li><P>The ability to easily edit and add new content / features to the website.</P></li>
                              </ul>
                        </Textdiv>
                  </Rowdiv>
                  <Rowdiv>
                        <Textdiv>
                              <H1>Create a website from scratch</H1>
                              <P>Web design skills are highly valuable in the job market and maybe you’ve thought it’s something you want to pick up. Building a website from scratch will give you the tools to create and customize a site exactly as you see fit.</P>
                              <H1>Web Design & Development Services</H1>
                              <P>Programming languages for websites fall into two major categories, namely Frontend and backend. The language use for program a webpage for the Frontend are HTML, CSS, and JavaScript.</P>
                        </Textdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/ITConsulting5.jpg`} alt="site design"></img></Imgdiv>
                  </Rowdiv>
                  <Rowdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/programing4.jpg`} alt="site design"></img></Imgdiv>
                        <Textdiv>
                              <H1>Frontend Technologies:</H1>
                              <ul>
                                    <li>
                                          <H2>Create a website from scratch</H2>
                                          <P>This language is used to format web pages and organize elements on a web page. It is made up of opening and closing tags that each has a specific task. For example, the title tag is used to write the web page’s title in the address bar.</P>
                                    </li>
                                    <li>
                                          <H2>Cascading Style Sheets (CSS)</H2>
                                          <P>As the name suggests, CSS is used to style web pages. For example, you can use CSS to define the website font, font size, colors, etc. CSS can be written in one file and reused over and over on numerous elements on a webpage.</P>
                                    </li>
                                    <li>
                                          <H2>JavaScript (JS)</H2>
                                          <P>JavaScript is used to make websites more interactive. Let us say you have created a button, and you want it to display a message when it is clicked. You can use JavaScript to write that functionality.</P>
                                    </li>
                                    <li>
                                          <H2>React.JS</H2>
                                          <P>React.JS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps.</P>
                                    </li>
                              </ul>
                        </Textdiv>
                  </Rowdiv>
                  <Rowdiv>
                        <Textdiv>
                              <H1>Backend technologies:</H1>
                              <P>Backend can be written in many different languages including Node.JS, Python, Ruby, PHP and Java but We usually use JavaScript (Node.js) in the backend as well as frontend. We also have experience in using SQL and noSQL databases such as: PostgreSQL, MySQL, MangoDB, Redis and … .</P>
                        </Textdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/programing5.jpg`} alt="site design"></img></Imgdiv>
                  </Rowdiv>

            </Maincontainer>
      )
}

export default Programming

