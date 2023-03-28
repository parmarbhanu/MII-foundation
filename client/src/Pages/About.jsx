import React from 'react'
import './About.css';
// import TeamPage from "./TeamPage";
import SingleTeamMember from "./SingleTeamMember";
export default function About() {
  return (
    <div className='about-container'>
      <div className="about-section-1">
        <h6 className='section-1-heading'>About Us</h6>
        <p className="section-1-paragraph">"Create a perfect ecosystem for your business"</p>
      </div>
      <div className="about-image-container">
        <img src="https://beantown.website/html/be/html/content/business3/images/biz3-home-bottom-section.png" alt="" />
      </div>
      <div className="about-section-2">
        <img src="https://beantown.website/html/be/html/content/lottie/images/Animation3.gif" alt="" className="about-image-2" />
        <div className="divide-and-conquer-2">
        <h3 className="section-2-heading-1">MI</h3>
        <h3 className="section-2-heading-2">I&nbsp;</h3>
        <h3 className="section-2-heading-3">Foundation</h3>
        {/* <h3 className="section-2-heading-4">n</h3> */}
        </div>
      </div>
      <div className="about-section-3">
        <h2 className="ourteam">Our Team</h2>
        <SingleTeamMember/>
      </div>
    </div>
  )
}