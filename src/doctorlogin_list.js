import axios from "axios";
import React, { useEffect } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
function Rolesdoctor(){
    const navigate =useNavigate()

    const click=()=>{
        navigate('/doc_user')
    }
    const update=()=>{
        navigate(`/doc_update/${id}`);
    }
    const {id}=useParams();
    // useEffect(()=>{
    // axios.get('http://localhost:8000/users/'+id)
    
    
    
    // .then(response=>console.log(response))
    // .catch(err=>console.log(err))
    // },[id])
    return(
        <div>
            <div>
             <span onClick={click}>booking Information</span>
            </div>
            <div>
            {/* <Link  to={`/doc_update/${id}`} className='btn btn-success'>    <span>Update Doctor</span></Link> */}
          
          <span onClick={update}>doctor update</span>
            </div>
        </div>
    )
}
export default Rolesdoctor