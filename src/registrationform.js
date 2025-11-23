import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './register.css';
function Formcreate(){
    const [inputs,setInputs]=useState({
        name:'',email:'',password:'',phone:'',country:'',pincode:'',city:'',gender:'',message:'',
    })
    const navigate=useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/register',inputs)
        .then(res=>{;
            navigate('/login');
        })
        .catch(err=>console.log(err))
    }
  
    return(
        <div>
            <form className="create">
                <h1>input users</h1>
               <div> <label>Username</label>
                <input type="text" name="name"  placeholder="username" onChange={e=>setInputs({...inputs,name:e.target.value})}/>
                </div><br/>

                <label>E-mail</label>
                <input type="email" name="email" placeholder="Enter email" onChange={e=>setInputs({...inputs,email:e.target.value})}/>
                <br/>
               
                <label>Password</label>
                <input type="password" name="password" placeholder="password" onChange={e=>setInputs({...inputs,password:e.target.value})}/>
                <br/>
               
                <label>Phone</label>
                <input type="text" name="name" placeholder="phone-number" onChange={e=>setInputs({...inputs,phone:e.target.value})}/>
                <br/>


                <div className="country"><label>Country*</label><select onChange={e=>setInputs({...inputs,country:e.target.value})}>
                    
                  <option></option>  <option>india</option><option>usa</option></select>
                </div>

                <label>Pin-code*</label>
                <input type="text" name="pincode" placeholder="00-0000" onChange={e=>setInputs({...inputs,pincode:e.target.value})}/>
                <br/>
                <div> <label>City*</label>
                <input type="text" name="name"  placeholder="place" onChange={e=>setInputs({...inputs,place:e.target.value})}/>

                </div>
                <div onChange={e=>setInputs({...inputs,gender:e.target.value})} className="gender">
                    <label>Gender:</label><span>Male</span><input type="radio" name="gender" value="male"/>
                <span
                >Female</span><input type="radio" value="female" name="gender"/>
                </div>
                <textarea  onChange={e=>setInputs({...inputs,message:e.target.value})} placeholder="message"></textarea><br/>

                
                <button onClick={handleSubmit}>submit</button><Link to='/'><button>Back</button></Link>
            </form>
        </div>
    )
}
export default Formcreate