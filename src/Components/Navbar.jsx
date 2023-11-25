import React from 'react'
import { ReactDOM } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import menu from '/src/images/menu.png'

const Navbar = () => {
  return (
    <>
      <header>
        <section className='navbar-container limit'>
          <div>
            <Link to="/"><h2>B. DESIGN</h2></Link>
          </div>
          <nav className="navbar">
            <Link to="/"><p>Home</p></Link>
            <Link to="/project"><p>Projects</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
          </nav>
          <div className='menu'>
            <img src={menu} alt="menu icon" />
          </div>
        </section>
      </header>
    </>
  )
}

export default Navbar