import React from "react";
import './emrabout.css';
function EmrAbout({aboutclose}){
    const moredetails=()=>{

       aboutclose(false);
    }
    return(
        <div className="section">
            <button id="close" onClick={moredetails}>x</button>
            <h1>
                Emergency care
            </h1>
            <p>
            Emergency medicine is the medical specialty concerned with the care of illnesses or
             injuries requiring immediate medical attention. Emergency medicine physicians
              (often called "ER doctors" in the United States) specialize in providing care for 
              unscheduled and undifferentiated patients of all ages. As first-line providers, in coordination with emergency medical services, they are primarily responsible for initiating resuscitation and stabilization and performing the initial investigations and interventions necessary to diagnose and treat illnesses or injuries in the acute phase. Emergency medical physicians generally practice in hospital emergency departments, pre-hospital settings via emergency medical services, and intensive care units. Still, they may also work in primary care settings such as urgent care clinics.
            </p>
        </div>
    )
}
export default EmrAbout;