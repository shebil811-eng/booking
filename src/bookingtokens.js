import React from "react";
import './token.css';
import DoctersEmgcare from "./emergencycaredoctors";
import { Link, useLocation } from "react-router-dom";
function Token(){
    let number=Math.floor( Math.random(1)*10);
    const location=useLocation();
    const user=location.state;

    return(
        <div >
          
        <div className="token">
            <h2>Token No:<span>{number}</span></h2>
        </div>
        <Link to='/'><button>back</button></Link>
       
        </div>
    )
}
export default Token