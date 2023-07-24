import React from 'react'
import '../component/Navbar.css'
import  { useState } from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
  import { GiHamburgerMenu } from "react-icons/gi";
import consdata from '../shared/contant';
  


const Navbar = () => {

   
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div style={{position:'sticky' , top:"0" , zIndex:"1"}}>
           <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         
            <img src={consdata.logo} alt="" />
         
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <li >Home</li>
            </li>
            <li>
              <li >about</li>
            </li>
            <li>
              <li >services</li>
            </li>
            <li>
              <li >contact</li>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <button className='btn btn-primary' type='button' onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
