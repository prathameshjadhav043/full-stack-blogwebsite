import React from 'react'
import { Container } from '@material-ui/core';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import useStyles from './style'

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="gl">
                <Nav />
                <Routes >
                    <Route index element={<Home />} />
                    <Route path="/auth" exact element={<Auth />} />
                </Routes >
            </Container >
        </BrowserRouter>
    )
}

export default App;
