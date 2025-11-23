import React, { useState } from "react";
import './book.css';
import logo from './doc1.jpg'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Book({closed}){

    let number=Math.floor( Math.random(1)*10);


    // const[x,setClose]=useState(false);
    const [inputs,setInputs]=useState({
        name:'',age:'',
        phonenumber:'',date:'',token:'',
    });
    const navigate=useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/booking',inputs)
        .then(res=>{;
            navigate('/user');
        })
        .catch(err=>console.log(err))
    }
    const close=()=>{
        closed(false)
    }
  

    return(
        <div>
           
            <form>
                <div className="books">
                  
                    <div>
                        <h2>Booking</h2>
                        <input id="username" type="text" placeholder="patient name" onChange={e=>setInputs({...inputs,name:e.target.value})}/> 
                        <br/>
                        <input type="text" id="age" placeholder="age" onChange={e=>setInputs({...inputs,age:e.target.value})}/>
                        <input type="tel"   placeholder="00-0000-0000" onChange={e=>setInputs({...inputs,phonenumber:e.target.value})}/>
                        <br/>
                        <input type="date" id="date" onChange={e=>setInputs({...inputs,date:e.target.value})}/>
                        <br/>
                        <input type="text" value={number}placeholder="Token no" onChange={e=>setInputs({...inputs,token:e.target.value})}/>Token

                        <button onClick={handleSubmit}>Booking</button> <button onClick={close}>close</button>
                       
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Book