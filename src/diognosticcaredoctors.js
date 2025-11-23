import React, { useEffect, useState } from "react";
import './emgcare.css';
// import logo from './doc1.jpg';
// import logo1 from './doc2.jpg';
// import logo2 from './doc3.webp';
// import { Link } from "react-router-dom";

// import { FaHospitalUser } from "react-icons/fa6";
// import { FaUserCircle } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMdSettings } from "react-icons/io";
// import { IoMdHelp } from "react-icons/io";
// import { IoIosLogOut } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Book from "./booking";

function DoctersDiogcare(){

    const location=useLocation();
    const user=location.state;


    const [profileVisible, setProfileVisible] = useState(false);
    // const[state,setState]=useState(false);
    // const[state1,setState1]=useState(false);
    // const[state2,setState2]=useState
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:8000/users');
          const usersData = response.data.filter((user) => user.department === 'Diagnostic services');
          setUsers(usersData);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchUsers();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }

   
    return(
        <div>
            {/* <div>
            <div>
            <div className='log' id='logs'>
            <button id='user'><FaHospitalUser />
            </button>
        <div className="profile">
            <div className='userdetails'>
                <h2>{user.name} <br/><span className='user'><FaUserCircle />
                </span></h2>
                <hr/>

                <ol className='icons'><li><span><FaPhoneAlt /></span>{user.phone} </li>
                <li><span><FaLocationDot /></span>{user.place}</li>
                <li><span><IoMdSettings />
                </span>settings</li>
                <li><span><IoMdHelp />
                </span>help & support</li>
                <li id='logout'><IoIosLogOut />
                logout</li>
                </ol>

            </div>
            </div>
            
          
            </div>
            </div>
            </div>
            <br/>
            <hr/> */}



   {/* <div class="items">
        <div class="container">
            <div>
            <img src={logo} alt=""/>
        </div>
        <h2>Dr,Ramkumar.As</h2><span>MBBS.MA   </span>
        <button onClick={close}>            {!state ? "check Availiblity" : 'close'}</button>
        {state ? <Book/>:""}

        </div>
        <div class="container"><div>
            <img src={logo1} alt=""/>
        </div>
        <h2>Dr,Sandhosh.k</h2><span>MBBS.MA   </span>
        <button onClick={close1}>{!state1 ? "check Availiblity" : 'close'}</button>
        {state1 ? <Book/>:""}
        </div>
        <div class="container"><div>
            <img src={logo2} alt=""/>
        </div>
        <h2>doctorname</h2>
        <button onClick={close2}>{!state2 ? "check Availiblity" : 'close'}</button>
        {state2 ? <Book/>:""}        
        </div>
       <div className="available">
       <h1>
    {data.name},{data.Available}
</h1>
<p>Please next doctor willbe Available</p>
       </div>

    </div> */}
    {/* <table>
    <tbody>
                    {
                      datadoc.map((k,j)=>{

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
                </table> */}







             {  users.map((k,i)=>{
                
const handleButtonClick = () => {
    if ((k.Availablity)==='Available') {
      setProfileVisible(true);
    } else {
        alert('Not available');
   
    }
  };
                
                return <div class="items" key={i}>
        <div class="container" >
            <div >
            <img src={k.image} alt=""/>
        </div>
        <h2>{k.name}</h2><span>{k.education}   </span>
        <button onClick={handleButtonClick}>    Available        </button>
      
        </div>
          
        <div id="available"><p>{k.name}</p><h2>{k.Availablity}</h2></div>
        </div>
       
  })}
  {profileVisible ? (<div className="book"><Book closed={setProfileVisible}/></div>):""}

        </div>
    )
}
export default DoctersDiogcare