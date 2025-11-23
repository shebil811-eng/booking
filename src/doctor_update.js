import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
function Update() {
 
  const[inputs,setInputs]=useState({
    name:'',email:'',password:'',education:'',Availablity:'',
  })
  const {id}=useParams();
useEffect(()=>{
axios.get('http://localhost:8000/users/'+id)


.then(response=>{setInputs(response.data)})
.catch(err=>console.log(err))
},[id])
const navigate=useNavigate()

const handleUpdate=(()=>{
  axios.put('http://localhost:8000/users/'+id,inputs)
.then(response=>{
  console.log(response);
  navigate('/')
})
.catch(err=>console.log(err))
})
  return (
    <div className="hos">
    <form className="users">
        <h1>Add Doctors Pulse Care</h1>
        <label></label><br/>
        <input type="text" name="name" value={inputs.name} placeholder="username" onChange={e=>setInputs({...inputs,name:e.target.value})}/>
        <br/>
        <label></label><br/>
        <input type="email" name="email" value={inputs.email} placeholder="Enter email" onChange={e=>setInputs({...inputs,email:e.target.value})}/>
        <br/>
        <input type="password" name="password" value={inputs.password}placeholder="Enter password" onChange={e=>setInputs({...inputs,password:e.target.value})}/>
        <br/>
        <div>
        <input type="text" name="name" value={inputs.education} placeholder="education*" onChange={e=>setInputs({...inputs,education:e.target.value})}/>

        </div>
        <div>

        </div>
<br/>
<div><select  onChange={e=>setInputs({...inputs,Availablity:e.target.value})}><option>Check</option><option>Available</option><option>Not Available</option></select></div>
        <button onClick={handleUpdate}>submit</button><button><Link to='doc_user' style={{color:"white",listStyleType:"none"}} >back</Link></button>
    </form>
</div>
  )
}

export default Update