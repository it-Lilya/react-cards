import React from "react";

export function Cards({children}) {
    return (
        <div class="card" style={{width: "230px", marginLeft: '100px', marginTop: "100px", border: "solid silver"}}>
            {children}
        </div>
        )
}



