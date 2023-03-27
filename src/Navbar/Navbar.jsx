import '../style.css';
import './Navbar.css'
import TokyoIMG from '../images/tokyo.png'
import { Link } from "react-router-dom";
import React, { useState } from 'react'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img src={TokyoIMG} className="tokyo-img" alt='Tokyo logo'/>
          <span className="tokyo-link">Tokyo</span>
        </a>
        <div className="nav-collapse-wrapper" id="navbarText">
          <ul className="nav-collapse-links">
            <li className="nav-item">
              <Link className="nav-link" to="">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/commands">Commands</Link>
            </li>
{/*             <li className="nav-item">
              <Link className="nav-link" to="/manacube">Manacube API</Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="https://discord.gg/mACacV4eG8">Support</a>
            </li>
            <li className="nav-item">
              <Link to="/invite" className="dashboard-button discord-btn-navbar">Invite bot</Link>
            </li>
          </ul>

          <ul className="navbar-nav mobile" >
              <li className="nav-item dropdown">
                <button className='nav-link dropdown nav-dropdown-button' onClick={() => setShowMenu(!showMenu)}>
                  <i className="fa-solid fa-bars mobile-icon"></i>
                </button>
              
                <div className={showMenu ? 'dropdown-menu show' : 'dropdown-menu'}>
                  <Link className="dropdown-item mobile" to="/" onClick={() => setShowMenu(!showMenu)}><div>Home</div></Link>
                  <Link className="dropdown-item mobile" to="/commands" onClick={() => setShowMenu(!showMenu)}><div>Commands</div></Link>
{/*                   <Link className="dropdown-item mobile" to="/manacube" onClick={() => setShowMenu(!showMenu)}><div>Manacube API</div></Link> */}
                  <a className="dropdown-item mobile" href="https://discord.gg/mACacV4eG8" onClick={() => setShowMenu(!showMenu)}><div>Support</div></a>
                  <hr className="dropdown-divider"/>
                  <Link to="/invite" className="dropdown-item mobile" disabled><div>Invite bot</div></Link>
                </div>
              </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar