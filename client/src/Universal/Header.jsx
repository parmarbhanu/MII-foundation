import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import './Header.css'
export default function Header() {
  const [display, setDisplay] = useState(window.innerWidth > 1024 ? true : false);
  const [naveff, setnaveff] = useState(0);
  useEffect(() => {
    setnaveff(window.pageYOffset);
    console.log(naveff)
  }, [naveff])

  return (
    <div className="nav-header" >
      <div className="header-bar">
        <div className="header-img-container">
          <NavLink to="/">
            <img src="https://miifoundation.cyclic.app/images/medicaps.png" alt="MII Logo" width={"65px"} />
          </NavLink>
          {display ? (
            <p className="cross" onClick={() => setDisplay(!display)}>
              <img src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="CrossMenu" width={"25px"} />
            </p>
          ) : (
            <div className="burger" onClick={() => setDisplay(!display)}>
              <div className="line" ></div>
              <div className="line" ></div>
              <div className="line" ></div>
            </div>
          )}
        </div>
        {display ? <div className="nav-items">
          <div className="item1">
          <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Offering">Offering</NavLink>
            <NavLink to="/Article">Article</NavLink>
            <NavLink to="/Event">Event</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </div>
        </div> : <></>}
      </div>
    </div>)
}
