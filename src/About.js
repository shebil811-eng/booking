import React from "react";
import './about.css';
import logo from './hos.jpg'
import logo1 from './about.webp'
import logo2 from './hos1.jpg'
import logo3 from './hos3.jpg'



function About(){
    
    return(
        <>
        
 <div id="contact">
        <div id="imag1"><img src={logo1} alt=""/><div className="design"></div><div className="design1"></div>
        <div className="design2"></div></div>
       <div id="seccontact"> <h1>About Us</h1>
        <p>Home - About</p></div>
    </div>




        <div className="about">
            <div>
            <section id="about">    <img src={logo} alt=""/></section>
            </div>
            <div>
                <p>
                <h2>About:</h2>hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.
              <br/>
              <p>  A hospital is a healthcare institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.[1] The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds 
                for patients who need long-term care.</p> <button>read more </button>  </p>
            </div>
        </div>

        <div className="about" id="ab1">
   
            <div className="images">
            <section id="about">     <img src={logo2} alt=""/>  <img src={logo3} alt="" id="img2"/></section>
            </div>
           
        </div>
        </>
    )
}
export default About