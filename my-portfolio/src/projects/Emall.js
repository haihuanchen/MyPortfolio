import React from 'react';
import './project.css';
import { Button } from '@material-ui/core';


function Emall() {
    return (
        <div className="project-container">
            <h1>Welcome to eMall!</h1>
            <h3>An eCommerce website to make online shopping(buying & selling) more accessible</h3>
            <ul className="project-desc">
                <li>Implemented Rails API backend and PostGreSQL database to provide endpoints for users, items and orders</li>
                <li>Developed user interface employing React and React Bootstrap for styling</li>
                <li>Employed user interface and allow users to post new items</li>  
                <li>Utilized the backend items and allow users to put items in shopping cart and place orders</li>  
            </ul>
            <div className="project-btns">
                <Button variant="contained" size="large" color="Link" href="https://www.loom.com/share/0aa9764b57464e489cb2f90205f7f139" target="_blank">Video Demo</Button>
                <Button variant="contained" size="large" color="Link" href="https://github.com/haihuanchen/eMall-frontend" target="_blank">GitHub</Button>
            </div>
            <img src="images/eMall.png" alt="project thumbnail" className='project-img' />
            <strong>Tech Stacks:</strong>
            <ul className="tech-stack">
                <li>React Front-end (Redux)</li>
                <li>Ruby on Rails Back-end</li>
                <li>PostgreSQL database</li>
                <li>React Bootstrap & CSS Bootstrap & Custom CSS stylings</li>
            </ul>
        </div>
    )
}

export default Emall
