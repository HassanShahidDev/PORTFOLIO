import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="HassnDev profile" />
            
            <h1>
                <span>I'm HassnDev,</span> Full Stack Developer based in Pakistan
            </h1>
            
            <p>
                I'm a passionate Full-Stack Developer with over 2 years of experience in building 
                modern, responsive, and scalable web applications using React.js, Node.js, Express, and MongoDB. 
                I love turning ideas into reality through clean, efficient, and maintainable code.
            </p>
            
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
