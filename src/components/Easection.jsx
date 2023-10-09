import React from "react";
import '../styles/Easection.css'


function EaNumber () {
    return(
        <>
            <section className="ea-num">
                
                <div className="input-box">
                <p className="p-txt">Please input your EA number</p>
                <hr />
                    <p className="label">EA-number</p>
                    <input type="text" placeholder="EA-001" id="eaNum" />
                </div>
            </section>
        
        </>
    )
}

export default EaNumber