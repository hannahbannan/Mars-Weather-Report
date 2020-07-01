import React, { useState } from "react";
import "./ZipSearch.css"

const ZipSearch = (props) => {
    const [zipCode, setZipCode] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        props.handleSubmit(zipCode);
        setZipCode("");
    }
    const handleChange = e => {
        const newZip = e.target.value;
        setZipCode(newZip)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Zip Code" className="input" value={zipCode} onChange={handleChange}></input>
                <br />
                <input type="submit" value="Search" className="search"></input>
            </form>
        </div>
    )
}



export default ZipSearch;