import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a passionate Full-Stack Developer with over 2 years of hands-on experience in building modern, responsive, and scalable web applications.</p>
                        <p>From designing intuitive user experiences to developing robust APIs, I love bringing ideas to life through code.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>
                                HTML & CSS
                            </p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>
                                REACT JS
                            </p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>
                                JAVASCRIPT
                            </p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>
                                NEXT JS
                            </p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>50+</h1>
                    <p>PROJECTS COMPLETED</p>

                </div>
                <hr />
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
