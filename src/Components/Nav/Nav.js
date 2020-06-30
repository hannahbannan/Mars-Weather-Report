import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Hamburger from "../Hamburger/Hamburger";
import "./Nav.css";
import Exit from "../Exit/Exit";
import Media from 'react-media';

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
              "hamburger goes here"
           }}
        </Media>
      </div>
    )
}

export default Nav;