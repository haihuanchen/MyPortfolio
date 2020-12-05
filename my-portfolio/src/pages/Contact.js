import React from 'react';
import './Contact.css';

const Contact = () =>{
    return (
        <div className="contact-container">
            <div className='text'>
                <h1>Let us connect!</h1>
            </div>
            <div className='contact'>
                <a className="link" href="mailto: haihuan.chen1@gmail.com">
                    <img className="icon" src={"/images/email.png"} alt="Email"/>Email
                </a>
                <a className="link" href="https://www.linkedin.com/in/samhaihuanchen/" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={"/images/linkedin.jpeg"} alt="LinkedIn"/>LinkedIn
                </a>
                <a className="link" href="https://github.com/haihuanchen" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={"/images/github.png"} alt="Github"/>Github
                </a>
                <a className="link" href="https://haihuan-chen1.medium.com/" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={"/images/medium.png"} alt="Medium"/>Medium
                </a>
            </div>
        </div>
    )
}

export default Contact
