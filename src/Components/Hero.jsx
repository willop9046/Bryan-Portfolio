import React from 'react'
import '../styles/hero.css'

const Hero = () => {
  return (
    <>
      <section>
        <div className="hero">
          <div className="bg"><img src="/src/images/heroBg.jpg" alt="bg" /></div>
          <div className="content">
            <div className="img">
              <img src="/src/images/heroLogo.svg" alt="heroLogo" />
            </div>
            <div className="img2">
              <img src="/src/images/sketch.jpg" alt="sketch jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero