import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Projects.css';

function Grams() {
    return (
        <>
           <li className="project-container">
               <Link className="project-link" to='/projects/Grams'>
                   <figure className='project-pic-wrap' data-category='Social Media'>
                       <img src='images/img-2.jpg' alt="project-img" className="project-img" />
                   </figure>
                   <div className="project-info">
                       <h5 className="project-text">Grams - Look out for the Grams and post your pictures!</h5>
                   </div>
               </Link>
            </li> 
        </>
    )
}

export default Grams;