import React from "react"

import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Itconsulting from './components/Itconsulting'
import WebDesign from './components/WebDesign'
import Wordpress from './components/Wordpress'
import Programming from './components/Programming'
import Webshops from './components/Webshops'
import SEO from './components/SEO'
import Demo from './components/Demo'



export default function Router() {
    return (
        <BrowserRouter>
            {/* <reset /> */}
            <Header />
            <Switch>

                <Route exact path="/Projects">
                    <Projects />
                </Route>
                <Route exact path="/test">
                    <h1>test</h1>
                </Route>
                <Route exact path="/About">
                    <About />
                </Route>
                <Route exact path="/Contact">
                    <Contact />
                </Route>
                <Route exact path="/Services">
                    <Services />
                </Route>
                <Route exact path="/ITconsulting">
                    <Itconsulting />
                </Route>
                <Route exact path="/WebDesign">
                    <WebDesign />
                </Route>
                <Route exact path="/Wordpress">
                    <Wordpress />
                </Route>
                <Route exact path="/Programming">
                    <Programming />
                </Route>
                <Route exact path="/Webshops">
                    <Webshops />
                </Route>
                <Route exact path="/SEO">
                    <SEO />
                </Route>
                <Route exact path="/Demo">
                    <Demo />
                </Route>
                <Route path="/">
                    <Home />
                </Route>

            </Switch>
            <Footer />
        </BrowserRouter>
    )
}