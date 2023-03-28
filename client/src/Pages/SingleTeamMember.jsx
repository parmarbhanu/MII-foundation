import React from 'react'
import './TeamPage.css';
export default function SingleTeamMember() {
  return (
    <div className="team-container">
      <div className="single-image-container">
        <img src="https://media.licdn.com/dms/image/C5603AQE3rSup8NMJAA/profile-displayphoto-shrink_200_200/0/1577668183645?e=1682553600&v=beta&t=ty3liNleppfKwT3UoHB-CDhfNZ4anPfJocM9A4gVerI" alt="" />
      </div>
      <div className="person-content-container">
        <h4 className="name-css">Mr Palash Garg</h4>
        <p className="description-css">OSD to Chancellor at Medi-Caps University</p>
      </div>
    </div>
  )
}