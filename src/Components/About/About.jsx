import React from 'react'
import "./about.css"
import Portrait from '../../../src/assets/images/Portrait.png';

const About = () => {
  return (
    <div className='about-section'>
      <div className='about-content'>
        <div className="about-text-image">
          <div className="about-text">
            <h4 className='about-subtitle'>WHO THE F**K AM I?</h4>
            <h1 className='about-title'>
                Hi, I’m a <span className='glow-text'>full-stack developer</span> based in Johannesburg, South africa.<br /><br />
                With a passion for tech and cosplaying, <br />
                my best cosplay is a hard-working employee.<br /><br />
                Anyways, hire me.<br />
                Because I'm <span className='glow-text'>broke</span> :)
            </h1>
          </div>
          <img src={Portrait} alt="Portrait" className="about-image" />
        </div>
        <button className='round-outline-btn'>DOWNLOAD CV</button>
      </div>
    </div>
  )
}

export default About;
