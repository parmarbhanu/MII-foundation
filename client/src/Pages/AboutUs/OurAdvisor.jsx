import React from 'react'
import SingleAdvisor from './SingleAdvisor'
export default function Advisor() {
  return (
    <section className="zl-staff" >
    <div className="zl-staff-content">
      <div className="zl-staff-container">
        <div className="zl-staff-header">
          <h2>
            <div style={{position: 'relative', display: 'inline-block', willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>Our Advisors</div>
          </h2>
        </div>

        <div className="zl-staff-items" >
        <SingleAdvisor img={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} name={"Amol Nitave"} designation={"Cheif Advisor"} about={"About Mr Amol Nitave"} /> 
         <hr />
          <SingleAdvisor img={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} name={"GK Sharma"} designation={"Cheif Advisor"} about={"About Mr GK Sharma"}/>
         <hr />
          <SingleAdvisor img={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} name={"Ram Bansal "} designation={"Cheif Advisor"} about={"About Mr Ram Bansal"}/>
        </div>
         </div>
    </div>
  </section>
    
  )
}
