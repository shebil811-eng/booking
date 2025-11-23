import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import './registerlist.css';


import { FaHospitalUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelp } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";


function Doctorrole(){
    const [data,setData]=useState([])

     
   
      const location=useLocation();
      const user=location.state;

      const navigate=useNavigate();
      
      const logout=()=>{
        navigate('/')
    }


    useEffect(()=>{
        axios.get('http://localhost:8000/booking')
        .then(res=>{setData(res.data);})
        .catch(err=>console.log(err))
    },[])

       const update=()=>{
        navigate(`/doc_update/${user.id}`);
    }
    
    return(
        <div>
            <span onClick={update} id="doc">doctor update </span>

    <div>
            <div>
            <div className='log' id='logs'>
            <button id='user'><FaHospitalUser />
            </button>
        <div className="profile">
            <div className='userdetails'>
                <h2>{user.name} <br/><span className='user'><FaUserCircle />
                </span></h2>
                <hr/>

                <ol className='icons'><li><span><FaPhoneAlt /></span>profile </li><br/>
                <li><span><FaLocationDot /></span>place</li><br/>
                <li><span><IoMdSettings />
                </span>settings</li>
                <li><span><IoMdHelp />
                </span>help & support</li>
                <li id='logout' onClick={logout}><IoIosLogOut />
                logout</li>
                </ol>

            </div>
            </div>
            
          
            </div>
            </div>
            </div>
            <br/>
            <hr/>


             <h1>booking Information</h1>
            <table className="home2">
                <thead>
                    <tr className="headingtitile">
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                       
                       
                        <th>phoneNumber</th>
                        <th>Date</th>
                        <th>Token NO</th>
                    </tr>
                </thead>
               
                <tbody>
                    {
                      data.map((k,j)=>{

                        return <tr key={j} className="values">
                            <td>{k.id}</td>
                            <td>{k.name}</td>
                            <td>{k.age}</td>
                           
                            <td>{k.phonenumber}</td>
                            <td>{k.date}</td>
                            <td>{k.token}</td>
                            </tr>
                      })
                    }
                </tbody>
                </table>
              
                

        </div>
    )
}
export default Doctorrole