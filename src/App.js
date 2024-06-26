import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Candidates from './components/Candidates';
import Candidate from './components/Candidate';
import ErrorPage from './components/ErrorPage';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path='/candidates' element={<Candidates />} />
                    <Route path='/candidates/:candidateId' element={<Candidate />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
      </BrowserRouter>
    )
}

export default App;
