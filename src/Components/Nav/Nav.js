import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "./Nav.css";
import Media from 'react-media';
import MobileNav from "../MobileNav/MobileNav"

const Nav = () => {

    const [open, isOpen] = useState(false);
    const handleClick = () => {
        isOpen(!open);
        console.log(open)
      }

    return (
      <div className="nav">
        <Media query="(min-width: 768px)">
          {matches => {
            return matches ?  
              <>
               <Link to='/report'>
                <h4>WEATHER REPORT</h4>
              </Link>
              <Link to='/season'>
                <h4>MARS SEASONS</h4>
              </Link>
              <Link to='/about'>
                <h4>ABOUT</h4>
              </Link> </>
              :
              <MobileNav handleClick={handleClick} open={open}/>
           }}
        </Media>
      </div>
    )
}

export default Nav;