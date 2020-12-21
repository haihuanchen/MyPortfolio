import React from 'react';
import './project.css';
import { Button } from '@material-ui/core';


function Grams() {
    return (
        <div className="project-container">
            <h1>Welcome to Grams!</h1>
            <h3>An online web application that allows users to sign-in and share their photos and captions online</h3>
            <ul className="project-desc">
                <li>Implemented Google Firebase as a database to store user data and host the application through Firebase</li>
                <li>Developed user interface employing React Hooks and Material UI for styling  </li>
                <li>Employed user interface and allow users to sign-up and sign-in through firebase authentication</li>  
            </ul>
            <div className="project-btns">
                <Button variant="contained" size="large" color="Link" href="https://grams-project.firebaseapp.com/" target="_blank">Live Website</Button>
                <Button variant="contained" size="large" color="Link" href="https://github.com/haihuanchen/Grams-Project" target="_blank">GitHub</Button>
            </div>
            <img src="images/Grams.png" alt="project thumbnail" className='project-img' />
            <strong>Tech Stacks:</strong>
            <ul className="tech-stack">
                <li>React Front-end (Hooks)</li>
                <li>Google Firebase Back-end (database, authentication & hosting)</li>
                <li>Material UI & Custom CSS stylings</li>
            </ul>
        </div>
    )
}

export default Grams
