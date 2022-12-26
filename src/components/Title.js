import React from "react"
import PropTypes from 'prop-types';

function Title({title, text}) {
    return (
       <div  style={{color: '#666666', padding: "15px"}}>
        <h3>{title}</h3>
        <p>{text}</p>
        <button style={{background: "#1e90ff", padding: "13px", color: "#ffffff", border: "none", fontWeight: "600"}}>Go somewhere</button>
       </div>
    )
}

Title.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default Title;

