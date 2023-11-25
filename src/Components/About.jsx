import React from 'react'
import '../styles/about.css'
import expLeft from '../images/expLeft.svg'
import expRight from '../images/expRight.svg'
import pfp from '../images/pfp.jpg'


const About = () => {
  return (
    <>
      <section className="about limit">
        <div className="header">
          <img src={expLeft} alt="expLeft" />
          <p className="title">ABOUT ME</p>
          <img src={expRight} alt="expRight" />
        </div>
        <div className="content">
          <div className="grid">
            <div className="pfp box">
              <img src={pfp} alt="profile picture" />
            </div>
            <div className="detail box">
              <p className="name">Bryan Lin</p>
              <p className="career">DESIGNER & ARCHITECTURER</p>
              <p className="description">Hi, I'm Bryan, a high school student aspiring to become an architect. I'm passionate about creating intricate building models and miniatures. In my free time, I delve into simulations and learn industry-standard software like AutoCAD and SketchUp to enhance my skills and work towards my dream of becoming a successful architect.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About