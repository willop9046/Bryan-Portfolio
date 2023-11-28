import React, {useState} from 'react'
import { ReactDOM } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import menu from '../images/menu.svg'
import closeBtn from '../images/closeBtn.svg'

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(sidebar);

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
          <div className='menu' onClick={() => setSidebar(true)}>
            <img src={menu} alt="menu icon" />
          </div>
        </section>
        <div className={sidebar ? "sidebar active" : "sidebar"} onClick={() => setSidebar(false)}>
          <div className='closeBtn'>
            <img src={closeBtn} alt="menu icon" />
          </div>
          <nav className="sidebar-nav">
            <Link to="/"><p>Home</p></Link>
            <Link to="/project"><p>Projects</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar