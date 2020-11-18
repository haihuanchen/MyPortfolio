import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    About <i class="far fa-address-card" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
