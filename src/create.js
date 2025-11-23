import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './create.css';
function Create(){
    const [inputs,setInputs]=useState({
        name:'',email:'',password:'',role:'doctor',
    })
    const handleSubmit=()=>{
        axios.post('http://localhost:8000/users',inputs)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <form>
                <h1>input users</h1>
                <label></label><br/>
                <input type="text" name="name" placeholder="username" onChange={e=>setInputs({...inputs,name:e.target.value})}/>
                <br/>
                <label></label><br/>
                <input type="email" name="email" placeholder="Enter email" onChange={e=>setInputs({...inputs,email:e.target.value})}/>
                <br/>
                <input type="password" name="password" placeholder="Enter password" onChange={e=>setInputs({...inputs,password:e.target.value})}/>
                <br/>
                <input type="text" value='user' name="role" placeholder="" onChange={e=>setInputs({...inputs,role:e.target.value})}/>
<br/>
                <button onClick={handleSubmit}>submit</button><button><Link to='/' style={{color:"white",listStyleType:"none"}} >back</Link></button>
            </form>
        </div>
    )
}
export default Create