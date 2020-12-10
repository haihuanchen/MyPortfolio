import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Projects.css';

function Goggle() {
    return (
        <>
           <li className="project-container">
               <Link className="project-link" to='/projects/Goggle'>
                   <figure className='project-pic-wrap' data-category='Search Engine'>
                       <img src='images/img-9.jpg' alt="project-img" className="project-img" />
                   </figure>
                   <div className="project-info">
                       <h5 className="project-text">Explore the Goggle Search Engine</h5>
                   </div>
               </Link>
            </li> 
        </>
    )
}

export default Goggle;
