import React from "react";
import Home from "./Home";
import './admin.css'
import { useNavigate } from "react-router-dom";
function Adminhome(){
    const nav = useNavigate();

    const registerlist=()=>{
        nav('/regiserlist')
    }
    const usersdisplay=()=>{
        nav('/doctorslist')
    }
    const createusers=()=>{
        nav('/users')
    }

    return(
        <div>
            
            <Home/>
          <div className="cards"> <div className="reglist">
                <h4  onClick={registerlist}>
                    Register Lists 
                </h4>

            </div>
            <div className="reglist">
                <h4 onClick={usersdisplay}>
                    users List 
                </h4>

            </div>
            <div className="reglist">
                <h4 onClick={createusers}>
                    Hospital doctors
                </h4>

            </div>
            </div> 
        </div>
    )
}
export default Adminhome