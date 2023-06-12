import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import MovieCreator from './MovieCreator';
import Homepage from './Homepage';

import '../stylesheets/styles.css';

export default function App (props) {
    const location = useLocation();
    console.log(location);
    return(
        <div id="appContainer">
            <h1>MyMovieList</h1>
            <h3>Howdy World!</h3>
            <main>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/create" element={<MovieCreator />} />
                </Routes>
            </main>
        </div>
    );
};