import React from 'react';
import './Contact.css';

const Contact = () =>{
    return (
        <div className="contact-container">
            <h1 className='text'>Get In Touch!</h1>
            <div className='contact'>
                <a className="link" href="mailto: haihuan.chen1@gmail.com">
                    <i class="fas fa-envelope-open-text icon"></i>E-mail
                </a>
                <a className="link" href="https://www.linkedin.com/in/samhaihuanchen/" target="_blank" rel=" noreferrer">
                    <i class="fab fa-linkedin icon"></i>LinkedIn
                </a>
                <a className="link" href="https://github.com/haihuanchen" target="_blank" rel=" noreferrer">
                    <i class="fab fa-github-square icon"></i>GitHub
                </a>
                <a className="link" href="https://haihuan-chen1.medium.com/" target="_blank" rel=" noreferrer">
                    <i class="far fa-comment icon"></i>Blog
                </a>
            </div>
        </div>
    )
}

export default Contact
