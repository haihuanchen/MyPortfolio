import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const closeMenu = () => setClick(false);

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    Haihuan Chen <i class="fas fa-bible"></i>
                </Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMenu}>
                            About Me <i class="fab fa-blogger"></i>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMenu}>
                            Projects <i class="fas fa-tasks"></i>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/resume' className='nav-links' onClick={closeMenu}>
                            Resume <i class="fas fa-file-pdf"></i>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMenu}>
                            Contact <i class="far fa-address-card"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
