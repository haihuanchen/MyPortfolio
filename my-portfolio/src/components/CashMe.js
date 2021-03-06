import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Projects.css';

function CashMe() {
    return (

        <div className='post'>
            <img src='images/CashMe.png' alt="project-img" className="thumbnail" />
            <div className="post-preview">
                <h3 className="post-title">Cash Me Outside</h3>
                <p className="post-intro">A web application that helps investors understand and make stocks investments</p>
                <Link to='/CashMe' className="post-link">Read More</Link>
            </div>
        </div>
    )
}

export default CashMe;