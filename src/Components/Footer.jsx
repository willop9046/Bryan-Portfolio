import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer limit">
          <div className="name"><h1>Bryan Lin</h1></div>
          <nav className="navbar">
            <Link to="/"><p>Home</p></Link>
            <Link to="/project"><p>Projects</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
          </nav>
          <div className="cr"><p>Copyright ©2023 All Rights Reserved. | Website Designed By William Lin</p></div>
        </section>
      </footer>
    </>
  )
}

export default Footer