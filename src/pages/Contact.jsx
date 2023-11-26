import React from 'react'
import '../styles/contact.css'
import expLeft from '../images/expLeft.svg'
import expRight from '../images/expRight.svg'

const Contact = () => {
  return (
    <>
      <section className="contact limit">
        <div className="header">
          <img src={expLeft} alt="expLeft" />
          <p className="title">CONTACT</p>
          <img src={expRight} alt="expRight" />
        </div>
        <div className="content">
          <h5>Email: linboss@gmail.com</h5>
        </div>
      </section>
    </>
  )
}

export default Contact