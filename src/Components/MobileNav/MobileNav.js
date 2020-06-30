import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger"
import Exit from "../Exit/Exit"
import "./MobileNav.css"

const MobileNav = ({handleClick, open}) => {

 return open ?  
    <div className="mobile-nav"> 
      <Exit handleClick={handleClick}/>
      <Link to='/report'>
        <h4>WEATHER REPORT</h4>
      </Link>
      <Link to='/season'>
        <h4>MARS SEASONS</h4>
      </Link>
      <Link to='/about'>
        <h4>ABOUT</h4>
      </Link> 
   </div> 
   :
     <Hamburger className="hamburger" handleClick={handleClick} /> 
}

export default MobileNav;