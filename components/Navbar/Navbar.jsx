import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className="app__navbar">
  <div className="app__navbar-logo">
  <img src={images.gericht} alt='app logo' />
  </div>
  <ul className='app__navbar-links'>
    <li className='p__opensans'><a href='#home'>Home</a></li>
    <li className='p__opensans'><a href='#home'>History</a></li>
    <li className='p__opensans'><a href='#home'>Cards List</a></li>
    <li className='p__opensans'><a href='#home'>Lands</a></li>
    <li className='p__opensans'><a href='#home'>Contact</a></li>
  </ul>
  <div className='app__navbar-login'>
<a href='#login' className='p__opensans'>Log In / Register</a>
  <div /> {/* zastepuje <br /> czyli dodaje dodatkową przestrzen */}
  <a href='' className='p__opensans'>Book Table</a>
    </div>
    <div className='app__navbar-samllscreen'>
<GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {setToggleMenu(true)}}/>

{toggleMenu && (
<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
<VscChromeClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
<ul className='app__navbar-smallscreen_links'>
    <li className='p__opensans'><a href='#home'>Home</a></li>
    <li className='p__opensans'><a href='#home'>History</a></li>
    <li className='p__opensans'><a href='#home'>Cards List</a></li>
    <li className='p__opensans'><a href='#home'>Lands</a></li>
    <li className='p__opensans'><a href='#home'>Contact</a></li>
  </ul>
</div>
)}
    </div>
  </nav>
)
  }

export default Navbar;
