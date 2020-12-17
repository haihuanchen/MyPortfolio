import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Projects.css';

function Emall() {
    return (
        <div className='post'>
            <img src='images/img-7.jpg' alt="project-img" className="thumbnail" />
            <div className="post-preview">
                <h3 className="post-title">eMall</h3>
                <p className="post-intro">An eCommerce website to make online shopping(buying & selling) more accessible</p>
                <Link to='/projects/eMall' className="post-link">Read More</Link>
            </div>
        </div>
    )
}

export default Emall;