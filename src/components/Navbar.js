import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarToggle = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to='#' className='menu-bars'>
            <FaBars onClick={sidebarToggle} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={sidebarToggle}>
            <li className="navbar-toggle">
              <Link to='#' className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
