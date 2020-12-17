import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Projects.css';

function Grams() {
    return (
        <div>
            <div className='post'>
                <img src='images/Grams.png' alt="project-img" className="thumbnail" />
                <div className="post-preview">
                    <h3 className="post-title">Grams</h3>
                    <p className="post-intro">An online web application that allows users to sign-in and share their photos and captions online</p>
                    <Link to='/projects/Grams' className="post-link">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Grams;