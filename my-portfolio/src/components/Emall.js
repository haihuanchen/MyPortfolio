import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Projects.css';

function Emall() {
    return (
        <>
           <li className="project-container">
               <Link className="project-link" to='/projects/eMall'>
                   <figure className='project-pic-wrap' data-category='eCommerce'>
                       <img src='images/img-7.jpg' alt="project-img" className="project-img" />
                   </figure>
                   <div className="project-info">
                       <h5 className="project-text">Check out the eCommerce website and see what we have!</h5>
                   </div>
               </Link>
            </li> 
        </>
    )
}

export default Emall;