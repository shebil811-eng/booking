import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './registerlist.css';
function Pagedisplay(){
    const [data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8000/register')
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
                        <th>Password</th>
                        <th>phone</th>
                        <th>country</th>
                        <th>pincode</th>
                        <th>city</th>
                        <th>Gender</th>
                        <th>Message</th>
                    </tr>
                </thead>
               
                <tbody>
                    {
                      data.map((k,j)=>{

                        return <tr key={j} className="values">
                            <td>{k.id}</td>
                            <td>{k.name}</td>
                            <td>{k.email}</td>
                            <td>none</td>
                            <td>{k.phone}</td>
                            <td>{k.country}</td>
                            <td>{k.pincode}</td>
                            <td>{k.city}</td>
                            <td>{k.gender}</td>
                            <td>{k.message}</td>
                            </tr>
                      })
                    }
                </tbody>
                </table>
        </div>
    )
}
export default Pagedisplay