import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Projects.css';

function CashMe() {
    return (
        <>
           <li className="project-container">
               <Link className="project-link" to='/projects/CashMe'>
                   <figure className='project-pic-wrap' data-category='Investment'>
                       <img src='images/img-8.jpg' alt="project-img" className="project-img" />
                   </figure>
                   <div className="project-info">
                       <h5 className="project-text">The Investment App that you are looking for!</h5>
                   </div>
               </Link>
            </li> 
        </>
    )
}

export default CashMe;