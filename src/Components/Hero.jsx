import React from 'react'
import '../styles/hero.css'
import heroBg from '/src/images/heroBg.jpg'
import heroLogo from '/src/images/heroLogo.svg'
import sketch from '/src/images/sketch.jpg'

const Hero = () => {
  return (
    <>
      <section>
        <div className="hero">
          <div className="bg"><img src={heroBg} alt="bg" /></div>
          <div className="content">
            <div className="img">
              <img src={heroLogo} alt="heroLogo" />
            </div>
            <div className="img2">
              <img src={sketch} alt="sketch jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero