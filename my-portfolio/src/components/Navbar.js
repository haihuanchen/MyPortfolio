import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../App.css';

function Navbar() {

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    Haihuan Chen <i class="far fa-lightbulb"></i>
                </Link>
                <ul className="nav-menu">
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' >
                            About Me <i class="fab fa-blogger"></i>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' >
                            Projects <i class="fas fa-tasks"></i>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a href="https://docs.google.com/document/d/1QdBsJamdDPCkzVe8KtKbqMlTN7eko3WpwKXslyHt3zg/edit?usp=sharing" 
                        className='nav-links' 
                        target="_blank"
                        rel="noreferrer">
                            Resume <i class="fas fa-file-pdf"></i>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' >
                            Contact <i class="far fa-address-card"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
