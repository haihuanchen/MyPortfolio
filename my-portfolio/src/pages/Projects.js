import React from 'react';
import CashMe from '../components/CashMe';
import Emall from '../components/Emall'
import Goggle from '../components/Goggle';
import Grams from '../components/Grams';
import './Projects.css';

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="projects-wrapper">
                    <ul className="projects-items">
                        <Goggle />
                        <Grams />
                    </ul>
                    <ul className="projects-items">
                        <Emall />
                        <CashMe />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
