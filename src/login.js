import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';
function Login(){
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[loggin,setIsLoggedIn]=useState(false);
    const[role,setRole]=useState('');
    const  navigate=useNavigate();

    
   const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/users')
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email && user.password === password);
        if (user) {
          setIsLoggedIn(true);
          setRole(user.role);
        loggin && (
           <div>
       
         
         {role === 'admin' && navigate('admin')}
          {role === 'admin' && alert("you have admin access successfully")}
          {role === 'user' && alert("you have user access")}
          {role === 'user' && navigate('/user')}
        </div>
        )
        } else {
          alert('Invalid email or password');

        }
      })
      .catch((error) => console.error(error));
  };

    return(
        <div>
            <form className="login">
            <h1>login</h1>
            <label>Email</label>
            <input type="email" placeholder="Enter E-mail" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <br/>
            <label>password</label>
            <input type="password" placeholder="Eneter password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <br/>
            <button onClick={handleSubmit}>Login now</button><Link to='/create'><button>new User</button></Link>
            </form>
            
        </div>
    )
}
export default Login