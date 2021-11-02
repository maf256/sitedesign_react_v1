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
import Website from './components/Website'
import Wordpress from './components/Wordpress'
import Programming from './components/Programming'
import Webshops from './components/Webshops'
import SEO from './components/SEO'


export default function Router() {
    return (
        <BrowserRouter>
            {/* <reset /> */}
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
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
                <Route exact path="/Website">
                    <Website />
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
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}