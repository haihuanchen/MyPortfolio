import React from 'react';
import CashMe from '../components/CashMe';
import Emall from '../components/Emall'
import Goggle from '../components/Goggle';
import Grams from '../components/Grams';
import './Projects.css';

function Projects() {
    return (
        <div className="main-container">
            <h1>My Past Projects</h1>
            <div className="post-wrapper">
                <Goggle />
                <Grams />
                <Emall />
                <CashMe />
            </div>
            
        </div>
    )
}

export default Projects
