import React from 'react';
import { Button } from '@material-ui/core';
import './project.css';

function Goggle() {
    return (
        <div className="project-container">
            <h1>Welcome to Goggle!</h1>
            <h3>A web search engine for users to search and receive documents and links about the subject inquiry </h3>
            <ul className="project-desc">
                <li>Utilized Google Context API and Google CSE to retrieve search results from Google Search Engine</li>
                <li>Implemented user interface with React Hooks frontend to view and Material UI Stylings</li>
                <li>Employed Google Firebase Storage and Hosting services to allow users to conduct searches </li>  
            </ul>
            <div className="project-btns">
                <Button variant="contained" size="large" color="Link" href="https://goggle-project.firebaseapp.com/" target="_blank">Live Website</Button>
                <Button variant="contained" size="large" color="Link" href="https://github.com/haihuanchen/Goggle-Project" target="_blank">GitHub</Button>
            </div>
            <img src="images/Goggle.png" alt="project thumbnail" className='project-img' />
            <strong>Tech Stacks:</strong>
            <ul className="tech-stack">
                <li>React Front-end (Hooks)</li>
                <li>Google Firebase Back-end (database, storage & hosting)</li>
                <li>Google Context API & Google CSE</li>
                <li>Material UI & Custom CSS stylings</li>
            </ul>
        </div>
    )
}

export default Goggle;
