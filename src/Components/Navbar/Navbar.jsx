import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [open, setOpen] = useState(false)

  const handleMenuClick = (section) => {
    setMenu(section)
    setOpen(false) // 👈 menu close when clicked
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className="nav-logo" />
      <img 
        src={menu_open} 
        alt="open menu" 
        className="nav-mob-open" 
        onClick={() => setOpen(true)} 
      />

      <ul className={`nav-menu ${open ? "nav-active" : ""}`}>
        <img 
          src={menu_close} 
          alt="close menu" 
          className="nav-mob-close" 
          onClick={() => setOpen(false)} 
        />

        <li>
          <AnchorLink className='anchor-link' href='#home' onClick={() => handleMenuClick("home")}>
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => handleMenuClick("about")}>
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services' onClick={() => handleMenuClick("services")}>
            <p>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work' onClick={() => handleMenuClick("work")}>
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => handleMenuClick("contact")}>
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
