import React, { useState } from 'react';
import { Button } from './Button';
import './Video.css';
import '../App.css';

function Video() {
    const urls = ["/videos/video-1.mp4", "/videos/video-2.mp4"];
    const [currentVideo, setCurrentVideo] = useState(0);

    const handleEnded = () => {
        if (currentVideo < urls.length - 1){
            setCurrentVideo(currentVideo => currentVideo + 1)
        }else{
            setCurrentVideo(0)
        }
    }

    return (
        <div className='video-container'>
            <video src={urls[currentVideo]} autoPlay onEnded={handleEnded} muted />
            <h1>Coding Journey Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="video-btns">
                <Button className='btns' buttonSytle='btn--outline' buttonSize='btn--large'>
                    Checkout My Projects
                </Button>
            </div>
        </div>
    )
}

export default Video;
