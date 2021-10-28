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
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}