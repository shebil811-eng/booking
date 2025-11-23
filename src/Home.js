import React from "react";
import logo from './hoshome.jpg';
import { CiSearch } from "react-icons/ci";
import './home.css';


function Home(){

    return(
        <div>
             <div id="image">
        <img src={logo} alt=""/>
    </div>

    <div id="homebottom">
        <div id="container">
            <h2>
                Emergency Cases
            </h2>
            <p>Booded ladies she basket season age her uneasy target.Discourse unwilling list.</p>
            <h2>
                call: + 000 000 0000 
            </h2>
        </div>
        <div id="container">
            <h2>
                Doctors Timetable 
            </h2>
            <p>Booded ladies she basket season age her uneasy saw.Disourse unwilling am no described.</p>
            <button>view time table</button>
        </div>
        <div id="time">
            <h2>opening Hours </h2>
            <p>sunday      - 8.00  to   7.00pm</p>
            <p>monday-fri  - 9.00  to   10.00pm</p>
            <p>Saturday    - 9.00  to   9.00pm</p>
            <p>Emergency   - 24Hr  /  7days</p>
        </div>
    </div>


        <div className="pic">
           
            <div className="heading">
          

                
             <p>
                
                 Save one life,take care your health
                 Save hundered lives.your are a nurse..
                    
            </p>
            <div id="search"><CiSearch  id="icon"/>
            <input type="text" placeholder="search"/><button>search</button>
            </div>
        
            </div>
           
        </div>
        </div>


    )
}
export default Home