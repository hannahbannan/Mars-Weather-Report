import React from "react";
import "./Hamburger.css";

const Hamburger = ({handleClick}) => {
    return (
    <div className='hamburger toggle' onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
        </div>
    )
}

export default Hamburger;