import React from 'react'
import '../styles/recentwork.css'
import { Link } from 'react-router-dom'
import expLeft from '/src/images/expLeft.svg'
import expRight from '/src/images/expRight.svg'
import rw1 from '/src/images/transform.jpg'
import rw2 from '/src/images/spatiality.jpg'
import rw3 from '/src/images/forms.jpg'

const Recentwork = () => {
  return (
    <>
      <section className='recentWork limit'>
        <div className="header">
          <img src={expLeft} alt="expLeft" />
          <p className="title">RECENT WORKS</p>
          <img src={expRight} alt="expRight" />
        </div>
        <div className="content">
          <div className="grid">
            <div className="box">
              <img src={rw1} alt="transform.jpg" />
              <p className="name">Transform</p>
              <p className="description">Transformations are the essence of growth, turning challenges into opportunities.</p>
            </div>
            <div className="box">
              <img src={rw2} alt="spatiality.jpg" />
              <p className="name">Spaciality</p>
              <p className="description">Spatiality explores dimensions, design, and the essence of physical environments.</p>
            </div>
            <div className="box">
              <img src={rw3} alt="forms.jpg" />
              <p className="name">Forms</p>
              <p className="description">Forms express ideas, beauty, and functionality through their unique shapes and structures.</p>
            </div>
          </div>
          <div className="btn">
            <Link to="/project"><button className='cta'>Learn More</button></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recentwork