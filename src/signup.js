import React from "react";
import './signin.css';
import { Link } from "react-router-dom";

function Signin({closemod}){
    const click=()=>{
        closemod(false);
    }
    return(
        <div>
                <div>
            <form>
                
                
                <div class="form">
                <button id="tag" onClick={click}>x</button>
                    <h1>pulse <span>Care</span></h1>
                    <h2>Register</h2>
                    
                    <input type="text" placeholder="username"/><br/>
                    <input type="password" placeholder="password"/><br/>
                    <button>submit</button><br/>
                    <p>Dont't have an Account? <Link to=''> Login</Link></p>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Signin