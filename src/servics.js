import React, { useEffect, useState } from "react";
import './services.css';
import logo from './images2.jpg';
import logo1 from './images3.jpg';
import logo2 from './images4.jpg';
import logo3 from './img2.webp';
import logo4 from './about.webp';
import logo5 from './lab.jpg';
import logo6 from './inpati.jpg';


import { useNavigate } from "react-router-dom";
import EmrAbout from "./serviceabout";
import UsersLogin from "./userslogin";
function Service(){

const[popvisible,setPopvisible]=useState(false);
useEffect(()=>{
    const timer=setTimeout(() => {
        setPopvisible(true);
    }, 5000);
    return()=>clearTimeout(timer);
});




    const nav = useNavigate();

    const doctors=()=>{
        nav('/login')
    }
    const[about,setAbout]=useState(false);
    const open=()=>{
        setAbout(true);
    }
    
    return(
        <div>
            {popvisible && (<div className="logintime"> <UsersLogin closed={setPopvisible}/></div>)}
                   
 <div id="contact">
        <div id="imag1"><img src={logo4} alt=""/><div className="design"></div><div className="design1"></div>
        <div className="design2"></div></div>
       <div id="seccontact"> <h1>Service</h1>
        <p>Home - service</p></div>
    </div>

           
<h1 id="service"><section id="service">SERVICES</section></h1>
    <div className="services">
    
        <br/>
        <br/>
        <div id="ser">
            <div image-container><img src={logo3} alt=""/></div><h2>Emergency Care</h2>
        <p>Emergency rooms provide care for urgent medical needs</p><div id="btn"><button onClick={doctors}>Check Availiblity</button><button onClick={open}>More Details</button></div></div>{about && <EmrAbout aboutclose={setAbout}/>}
            
        <div id="ser">
            <div image-container><img src={logo2} alt=""/></div><h2>Diagnostic services</h2>
            <p>Hospitals offer X-rays, radiology, and laboratory services</p><div id="btn"><button onClick={doctors}>Check Availiblity</button><button onClick={open}>More Details</button></div></div>

            <div id="ser">
                <div image-container><img src={logo} alt=""/></div><h2>Home Care</h2>
                <p>Hospitals offer home care services</p><div id="btn"><button>Check Availiblity</button><button>More Details</button></div></div>
    
                  
    </div>
    <div id="service2">  <div id="ser"><div image-container><img src={logo1} alt=""/></div><h2>Surgery</h2>
        <p>Emergency rooms provide care for urgent medical needs</p><div id="btn"><button>Check Availiblity</button><button>More Details</button></div></div>

        <div id="ser"><div image-container><img src={logo5} alt=""/></div><h2>Laboratary Service Care</h2>
            <p>Emergency rooms provide care for urgent medical needs</p></div>

            <div id="ser"><div image-container><img src={logo6} alt=""/></div><h2>Inpatient Care</h2>
                <p>Emergency rooms provide care for urgent medical needs</p></div>
               
    </div>
    
        </div>
    )
}
export default Service