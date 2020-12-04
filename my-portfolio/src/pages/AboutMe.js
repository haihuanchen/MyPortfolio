import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="aboutMe-container">
            <img src="/images/profile-pic.JPG" alt='profile-pic' className="aboutMe-img"/>
            <div className="aboutMe-text">
                <h1>Hi there!</h1>
                <p>I am <strong>Haihuan Chen</strong>! Most friends call me Sam! I was born in China, came to the United States when I was in high school. I had to learn English and adapt to the American culture quickly. I studied Finance in Baruch College, and after my college life I started to work in the financial industry (Northwestern Mutual) where I managed insurance and investment service responsibilities. Soon I left the financial industry to pursue a career as Accounts Payable Bookkeeper at a Non-Profit Organization(Cerebral Palsy Association of NYS). Then I joined The Higher Education Institute (BMCC) to service students and professors. Transitioning to become a Full-Stack Software Engineer because I am passionate about solving problems, building apps to help people resolve their issues and make their life easier. My previous experiences give me insights to Higher Education services, Accounting details and financial industry business rundown.</p>
                <p>In my leisure time, I love to go out for hiking or walks in parks; prepare and cook delicious Chinese food; read books or poems about life (book recommendation: Ishmael); and play video games or watch movies with friends. I enjoy meeting new people and connecting with them to learn about their experiences and cultures, finding inspirations in my life. I always believe that I can learn something from everyone, whether it is their life experiences, their cultural values, or their pursuit in life. </p>
                <p>Thank you for taking your time to learn a little bit about me. 
                    I am currently seeking for full-time / internship / apprenticeship opportunities, 
                    open to explore more options and willing to relocate. 
                    Let us <Link to="/contact" className="contact-link">connect!</Link> 
                </p>
            </div>
        </div>
    )
}

export default AboutMe
