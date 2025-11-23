
import './nav.css';
import React, { useState } from 'react';
import { FaHospitalUser } from "react-icons/fa6";

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { GiHospitalCross } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMdSettings } from "react-icons/io";
// import { IoMdHelp } from "react-icons/io";
// import { IoIosLogOut } from "react-icons/io";



import Signin from './signin';

function Navbar(){
   
    const [name,setName]=useState(false);
    const open=()=>{
        setName(true);
    }
    return(
        <div>
            <nav>
            <div className='navbar  sticky-top navbar-expand-lg'>

                <div className='dropdown'>
                  <h3 style={{color:"white",textDecoration:"none"}}><FaBars /></h3>
                  <div className='drop-content'>

                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >

                    <li  className='Nav-item' id='links'>
                    <Link to="/" style={{color:"white",textDecoration:"none"}}> Home </Link>
                    </li>

                    <li  className='Nav-item' id='links'>
                    <Link to='about' style={{color:"white",textDecoration:"none"}}>About</Link>
                    </li>


                    <li  className='Nav-item' id='links'>
                    <Link to='contact' style={{color:"white",textDecoration:"none"}}>Contact</Link>
                    </li>


                    <li  className='Nav-item' id='links'>
                    <Link to='service' style={{color:"white",textDecoration:"none"}}>services</Link>
                    </li>
                    
                    <div className='log'>
                    <button>Sign-Up</button>
                    <button><Link to="Signin" style={{color:"white",textDecoration:"none"}}>Sign-in</Link></button>
                    </div>

                    </ul>



                </div>
                </div>




               
                <h1 id='head'><span><GiHospitalCross /></span>pulse<span>care</span></h1>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id='navs' >

            <li  className='Nav-item'>
            <Link to="/" style={{textDecoration:"none"}} id='navcol'> Home </Link>
            </li>

            <li  className='Nav-item'>
            <Link to='about' style={{textDecoration:"none"}} id='navcol'>About</Link>
            </li>

            
            <li  className='Nav-item'>
            <Link to='contact' style={{textDecoration:"none"}} id='navcol'>Contact</Link>
            </li>

            
            <li  className='Nav-item'>
            <Link to='service' style={{textDecoration:"none"}} id='navcol'>services</Link>
            </li>
           
            </ul>
            
            {/* <div className='log' id='logs'>
            <button id='user'><FaHospitalUser />
            </button>

            <div className='userdetails'>
                <h2>username <br/><span className='user'><FaUserCircle />
                </span></h2>
                <hr/>
                <ol className='icon'><li><span><FaPhoneAlt /></span>Phone Number </li><li><span><FaLocationDot /></span>city</li>
                <li><span><IoMdSettings />
                </span>settings</li>
                <li><span><IoMdHelp />
                </span>help & support</li>
                <li id='logout'><IoIosLogOut />
                logout</li>
                </ol>

            </div>
          
            </div> */}
            <button onClick={open} id='login'>Sign-in</button>

           
            </div>


            </nav>
            {name && <Signin closemod={setName}/>}

        </div>
    );
}
export default Navbar;