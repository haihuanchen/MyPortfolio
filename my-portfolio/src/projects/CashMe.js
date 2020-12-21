import React from 'react';
import './project.css';
import { Button } from '@material-ui/core';


function CashMe() {
    return (
        <div className="project-container">
            <h1>Welcome to Cash Me Outside!</h1>
            <h3>A web application that helps investors understand the stock market and make simple stock investments</h3>
            <ul className="project-desc">
                <li>Utilized Ruby on Rails and SQLite3 database as a full stack app to retrieve and analyze stock market data.</li>
                <li>Implemented Alpha Vantage API to look up current stock market information and stock prices</li>
                <li>Developed user interface and allow user to invest in stocks of their choices</li>  
            </ul>
            <div className="project-btns">
                <Button variant="contained" size="large" color="Link" href="https://www.loom.com/share/e18c0e383e6f40d18abb29dd797aa973" target="_blank">Video Demo</Button>
                <Button variant="contained" size="large" color="Link" href="https://github.com/haihuanchen/Stock-Simulator-Project-2" target="_blank">GitHub</Button>
            </div>
            <img src="images/CashMe.png" alt="project thumbnail" className='project-img' />
            <strong>Tech Stacks:</strong>
            <ul className="tech-stack">
                <li>Ruby on Rails Front-end & Back-end</li>
                <li>SQLite 3 database</li>
                <li>Alpha Vantage API for current stock market prices</li>
            </ul>
        </div>
    )
}

export default CashMe
