import React from 'react'
import '../styles/recentwork.css'
import { Link } from 'react-router-dom'
import expLeft from '/src/images/expLeft.svg'
import expRight from '/src/images/expRight.svg'
import rw1 from '../images/honeycomb.jpg'
import rw2 from '../images/spatiality.jpg'
import rw3 from '../images/divulge.jpg'

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
              <p className="name">Honeycomb</p>
              <p className="description">Inspired by the geometric shape and the functionality of a bee hive, this twin tower skyscraper model consist of office working space, residential home and entertaining space.</p>
            </div>
            <div className="box">
              <img src={rw2} alt="spatiality.jpg" />
              <p className="name">Lightwork</p>
              <p className="description">Spatiality explores dimensions, design, and the essence of physical environments.</p>
            </div>
            <div className="box">
              <img src={rw3} alt="forms.jpg" />
              <p className="name">Divulge</p>
              <p className="description">This model is inspired by the formation of the iceberg in which we often couldn't see what under the ocean surface. Viewing from different perspectives, the sophisticated supporting system will be reveal.</p>
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