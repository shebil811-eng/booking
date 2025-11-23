import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './userscreate.css';
function Users(){
    const [inputs,setInputs]=useState({
        name:'',email:'',password:'',education:'',image:'', role:'Docter', department:'',
    })
    
    const handleSubmit=()=>{
        axios.post('http://localhost:8000/users',inputs)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return(
        <div className="hos">
            <form className="users">
                <h1>Add Doctors Pulse Care</h1>
                <label></label><br/>
                <input type="text" name="name" placeholder="username" onChange={e=>setInputs({...inputs,name:e.target.value})}/>
                <br/>
                <label></label><br/>
                <input type="email" name="email" placeholder="Enter email" onChange={e=>setInputs({...inputs,email:e.target.value})}/>
                <br/>
                <input type="password" name="password" placeholder="Enter password" onChange={e=>setInputs({...inputs,password:e.target.value})}/>
                <br/>
                <div>
                <input type="text" name="name" placeholder="education*" onChange={e=>setInputs({...inputs,education:e.target.value})}/>

                </div>
                <div>
                <input type="file" name="image"  onChange={e=>setInputs({...inputs,image:e.target.value})}/>

                </div>
                <input type="text" value='doctors' name="role" placeholder="" onChange={e=>setInputs({...inputs,role:e.target.value})}/>
<br/>
<select  onChange={e=>setInputs({...inputs,department:e.target.value})}><option>Select</option><option>Emergency Care</option><option>Diagnostic services
</option><option>Home Care</option><option>Surgery</option>
<option>Laboratary service</option><option>Inpatient Care</option>

</select>
                <button onClick={handleSubmit}>submit</button><button><Link to='/' style={{color:"white",listStyleType:"none"}} >back</Link></button>
            </form>
        </div>
    )
}
export default Users