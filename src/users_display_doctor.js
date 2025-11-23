import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './registerlist.css';
function Doctordisplay(){
    const [data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8000/users')
        .then(res=>{setData(res.data);})
        .catch(err=>console.log(err))
    },[])
    return(
        <div>
             <h1>user Information</h1>
            <table className="home2">
                <thead>
                    <tr className="headingtitile">
                        <th>id</th>
                        <th>Name</th>
                        <th>E-mail</th>
                       
                       
                        <th>Education</th>
                        <th>Doctors</th>
                    </tr>
                </thead>
               
                <tbody>
                    {
                      data.map((k,j)=>{

                        return <tr key={j} className="values">
                            <td>{k.id}</td>
                            <td>{k.name}</td>
                            <td>{k.email}</td>
                           
                            <td>{k.education}</td>
                            <td><img src={k.image} style={{height:'100px'}} alt="doctor"/></td>
                            </tr>
                      })
                    }
                </tbody>
                </table>
        </div>
    )
}
export default Doctordisplay