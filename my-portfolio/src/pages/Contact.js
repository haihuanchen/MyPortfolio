import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () =>{
    return (
        <div className="contact-container">
            <div className='text'>
                <h1>Let us connect!</h1>
            </div>
            <div className='contact'>
                <Link className="link" href="mailto: haihuan.chen1@gmail.com">
                    <img className="icon" src={"/images/email.png"} alt="Email"/>E-mail
                </Link>
                <Link className="link" href="https://www.linkedin.com/in/samhaihuanchen/" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={"/images/linkedin.jpeg"} alt="LinkedIn"/>LinkedIn
                </Link>
                <Link className="link" href="https://github.com/haihuanchen" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={"/images/github.png"} alt="Github"/>GitHub
                </Link>
                <Link className="link" href="https://haihuan-chen1.medium.com/" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={"/images/medium.png"} alt="Blog"/>Blog
                </Link>
            </div>
        </div>
    )
}

export default Contact
