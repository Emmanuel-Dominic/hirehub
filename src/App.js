import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
      </BrowserRouter>
    )
}

export default App;
