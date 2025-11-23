import React, { useState } from "react";
import './cont.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from './about.webp'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact(){

    const [inputs,setInputs]=useState({
        name:'',
        message:'',
    });
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/messages',inputs)
        .then(res=>{console.log(res);
            navigate('/contact')
            
        })
        .catch(err=>console.log(err))
    }
  


return(
  <>
  <div id="contact">
        <div id="imag1"><img src={logo} alt=""/><div className="design"></div><div className="design1"></div>
        <div className="design2"></div></div>
       <div id="seccontact"> <h1>contact us</h1>
        <p>Home - Contact</p></div>
    </div>




    <div id="con">
        <form>
        <div id="message"><h2>Send message</h2>
        <input type="text" placeholder="name" onChange={e=>setInputs({...inputs,name:e.target.value})}/><br/>
    <textarea name="" id="" row="15" cols="60" onChange={e=>setInputs({...inputs,message:e.target.value})}>Message:</textarea>
    <button onClick={handleSubmit}>send</button>
    </div>
    </form>
        <div id="contactus"><h3>Hospital Address</h3>
        <p>4920 trissur,Malappuram,kozhikode in kerala,MN 55049 </p>
    
            <br/>
            <br/>
            <br/>
            <h3>Email Address</h3>
            <p>www.Hospital @gmail.com <br/>
            www.pulscare Hospital.com <br/>
        faceboook/instagram</p>
    </div>
        <div id="contactus"><h3>Phone Number</h3><p>+000 000 0000,91+00 0000 000,02-00-5644</p>
        <br/>
    <br/><br/>
<h3>Fax Number</h3>
<p>4920 Northwest 2 Avenue trissur,mallappurm,kozhikode-0000-00</p></div>
    </div>



    <div className="contactus">
        <div className="sec1">
        <p>
            pulse Care HOSPITAL 
        </p>
    <section id="contact">    <button>Contact Us</button></section>
        </div>
        <div className="sec1">
        <p>
          <span><MdEmail /></span> E-mail @gmail.com 
        </p>
    
        </div>
        <div className="sec1">
        <p>
          <span><FaPhoneAlt />
          </span> phone:91+000000000
        </p>
    
        </div>

    </div>
    </>
)

}
export default Contact