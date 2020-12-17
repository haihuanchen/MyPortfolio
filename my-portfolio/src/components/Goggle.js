import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Projects.css';

function Goggle() {
    return (
        <div>
            <div className='post'>
                <img src='images/img-9.jpg' alt="project-img" className="thumbnail" />
                <div className="post-preview">
                    <h3 className="post-title">Goggle</h3>
                    <p className="post-intro">A web search engine for users to search and receive documents and links about the subject inquiry </p>
                    <Link to='/projects/Goggle' className="post-link">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Goggle;
