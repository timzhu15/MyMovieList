import React from 'react';
import { Routes, Link, useNavigate } from 'react-router-dom';

export default function Homepage (props) {
    return(
        <div id="homepage">
            <main>
                <Link to={`/create`} style={{ textDecoration: 'none' }}>
                    <button type="button" id="getStartedButton"> Get Started </button>
                 </Link>
            </main>
        </div>
    );
};