import React from 'react'
import { H1, Maincontainer, Rowdiv, Textdiv, Imgdiv, H2, P } from './About'

const Wordpress = () => {
      return (
            <Maincontainer>
                  <Rowdiv>
                        <Textdiv>
                              <H1>Wordpress</H1>
                              <P>WordPress is a free, open-source website creation platform. On a more technical level, WordPress is a content management system (CMS) written in PHP that uses a MySQL database. In non-geek speak, WordPress is the easiest and most powerful blogging and website builder in existence today. WordPress is an excellent website platform for a variety of websites. From blogging to e-commerce to business and portfolio websites, WordPress is a versatile CMS. Designed with usability and flexibility in mind, WordPress is a great solution for both large and small websites.</P>
                              <H2>What is a WordPress Website?</H2>
                              <P>A WordPress website is any website that uses WordPress as its content management system (CMS). WordPress powers both the backend of the website (the interface where a user logs in to make changes or add new content) and the frontend (the visible part of the website that your visitors see on the web).</P>
                        </Textdiv>
                        <Imgdiv><img src={`${window.origin}/assets/img/wordpress1.jpg`} alt="webdesign sandvika oslo"></img></Imgdiv>
                  </Rowdiv>
                  <Rowdiv>
                        <Textdiv>
                              <H1>Here are just a few examples of the types of websites you can build with WordPress:</H1>
                              <ul>
                                    <li>
                                          <H2>Blog</H2>
                                          <P>A blog is a special type of website devoted to sharing thoughts, photos, reviews, tutorials, recipes and so much more. Blogs usually display the most recently-published content first</P>
                                    </li>
                                    <li>
                                          <H2>E-commerce website</H2>
                                          <P>An e-commerce website allows you to sell goods or services online and collect payment via an online payment system. You can download and install a WordPress e-commerce plugin to extend the default functionality of WordPress so you can have an online store on your website.</P>
                                    </li>
                                    <li>
                                          <H2>Business website</H2>
                                          <P>Many businesses will benefit from having an online presence in the form of their own website. If your business needs a website for customers to learn about your company and what you have to offer, WordPress is an excellent option. Customers can contact you, ask for a quote, schedule an appointment and much more.</P>
                                    </li>
                                    <li>
                                          <H2>Membership website</H2>
                                          <P>A membership website allows you to put content behind a paywall or an account login. To access pages or posts, users must login or pay for the content. WordPress can also handle membership websites with additional plugins.</P>
                                    </li>
                                    <li>
                                          <H2>Portfolio website</H2>
                                          <P>Show off your artwork, design skills and more with a portfolio website built on WordPress.</P>
                                    </li>
                                    <li>
                                          <H2>Forum website</H2>
                                          <P>A forum website can be a helpful place for users to ask questions or share advice. Believe it or not, many forum websites run on WordPress.</P>
                                    </li>
                                    <li>
                                          <H2>Event website</H2>
                                          <P>Hosting an event? WordPress makes it easy for you to share your event details and sell tickets.</P>
                                    </li>
                                    <li>
                                          <H2>E-learning website</H2>
                                          <P>Students can take online courses, track their progress, download resources and much more from an e-learning website. With a special kind of plugin called a WordPress LMS plugin, you can offer online courses from a WordPress website.</P>
                                    </li>
                                    <li>
                                          <H2>Wedding website</H2>
                                          <P>Share the details of your big day with a wedding website built on WordPress. With an array of WordPress wedding themes, you can get a website up quickly and easily.</P>
                                    </li>
                              </ul>
                        </Textdiv>
                  </Rowdiv>
            </Maincontainer>
      )
}

export default Wordpress

