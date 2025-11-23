import React, { useState } from "react";
import'./users.css';

import {  useNavigate } from "react-router-dom";

function UsersLogin({closed}){
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[loggin,setIsLoggedIn]=useState(false);
    // const[role,setRole]=useState('');
    const  navigate=useNavigate();

  
const click=()=>{
closed(false)
}
    
    const handleSubmit = (event) => {
     event.preventDefault();
     fetch('http://localhost:8000/register')
       .then((response) => response.json())
       .then((data) => {
         const user = data.find((user) => user.email === email && user.password === password);
         if (user) {
           setIsLoggedIn(true);
        //    setRole(user.role);
           alert("you have access login Successfully");
           loggin && navigate(`/service2/${user.name}`,{state:user})
        //  loggin && (
        //     <div>
        
          
        
        //    {role === 'user' && alert("you have user access")}
        //    {role === 'user' && navigate('/doctor')}
        //  </div>
        //  )
          } else {
           alert('Invalid email or password');
 
         }
       })
       .catch((error) => console.error(error));
   };
 

    const register=()=>{
        navigate('/register')
    }
    // const click=()=>{
    //     closemod(false);
    // }
    return(
        // <div>
        //         <div className="userslogin">
        //     <form>
                
                
        //         <div className="create">
              
        //             <h1>pulse <span>Care</span></h1>
        //             <h2>LOGIN</h2>
                    
        //             <input type="email" placeholder="Eneter email@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        //             <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        //             <button onClick={handleSubmit}>submit</button><br/>
        //             <p>Dont't have an Account? <span onClick={register}> Register</span></p>
        //         </div>
        //     </form>
        // </div>
        // </div>



        <div>
        <div>
    <form id="userlogin">
        
        
        <div className="userlogin">
        <button id="tag" onClick={click}>x</button>

            <h1>pulse <span>Care</span></h1>
            <h2>LOGIN</h2>
            
            <input type="email" placeholder="Eneter email@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button onClick={handleSubmit}>submit</button><br/>
            <p>Dont't have an Account? <span onClick={register}> Register</span></p>
        </div>
    </form>
</div>
</div>
    )
}
export default UsersLogin