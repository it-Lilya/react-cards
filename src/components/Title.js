import React from "react"

export function Title({title, text}) {
    return (
       <div className="card-body" style={{color: '#666666', padding: "15px"}}>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <button style={{background: "#1e90ff", padding: "13px", color: "#ffffff", border: "none", fontWeight: "600"}}>Go somewhere</button>
       </div>
    )
}


