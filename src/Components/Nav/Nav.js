import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Hamburger from "../Hamburger/Hamburger"
import "./Nav.css"


const Nav = () => {

    const [open, isOpen] = useState(false);
    const handleClick = () => {
        isOpen(!open);
        console.log(open)
      }

    return (
        <div className="nav">
            {open ? 
            <> 
            <Hamburger className="hamburger" handleClick={handleClick} /> 
            <Link to='/report'>
            <h4>WEATHER REPORT</h4>
            </Link>
            <Link to='/season'>
            <h4>MARS SEASONS</h4>
            </Link>
            <Link to='/about'>
            <h4>ABOUT</h4>
            </Link> </> :
             <Hamburger className="hamburger" handleClick={handleClick} /> 
            }
          </div>
    )
}

export default Nav;