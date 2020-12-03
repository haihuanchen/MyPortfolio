import React from 'react';
import { Button } from './Button';
import './Video.css';
import '../App.css';

function Video() {
    return (
        <div className='video-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Coding Journey Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="video-btns">
                <Button className='btns' buttonSytle='btn--outline' buttonSize='btn--large'>
                    Check out my projects
                </Button>
            </div>
        </div>
    )
}

export default Video;
