import Navbar from 'components/Navbar/Navbar'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'styles/normalize.css'
import 'styles/App.css'
import Home from 'components/pages/HomePage/Home'

function App(): JSX.Element {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default App
