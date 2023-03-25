// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// // import {Link} from "react-scroll"
// import './Header.css';
// export default function Header() {
// //   const navigate=useNavigate();
// //     const [display, setDisplay] = useState(window.innerWidth > 1024? true : false);
// //     const [display1, setDisplay1] = useState(window.innerWidth > 1024? true : false);
//   return (
//     <div className="nav-header">
//       <div className="header-bar">
//         <div className="header-img-container">
//           <NavLink to="/">
//             <img src="./images/medicaps.png"  alt="" width={"80px"} />
//           </NavLink>
//          </div>
//               <div className="line"></div>
//               <div className="line"></div>
//         </div>
          
    
//           <li className="nav-list list-active1">
//             <NavLink to="/about" onClick={()=>{("/about")}} >About</NavLink>
//               <ul className="nav-child1" onClick={()=>{("/about")}}>
//                 {/* <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="nav-child-list1">About MII</Link>
//                 <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="nav-child-list1">Identity and Cultural</Link>
//                 <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="nav-child-list1">Team</Link>
//                 <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="nav-child-list1">Testimonials</Link> */}
//                 <li className="nav-child-list1"><  onClick={()=>{("/about")}} spy={true} smooth={true} offset={50} duration={500}>About MII</></li>
//                 <li className="nav-child-list1"><Link  onClick={()=>{("/about")}} spy={true} smooth={true} offset={50} duration={500}>Identity and Cultural</Link></li>
//                 <li className="nav-child-list1"><Link  onClick={()=>{("/about")}} spy={true} smooth={true} offset={50} duration={500}>Team</Link></li>
//                 <li className="nav-child-list1"><Link  onClick={()=>{("/about")}} spy={true} smooth={true} offset={50} duration={500}>Testimonials</Link></li>
//               </ul>
//           </li>
//           <li className="nav-list list-active2">
//             <NavLink to="/ourofferings" >Our offerings</NavLink>
//               <ul className="nav-child2" onClick={()=>{("/ourofferings")}} style={{cursor:"pointer"}}>
//                 <li className="nav-child-list2" >Services</li>
//                 <li className="nav-child-list2">Process</li>
//                 <li className="nav-child-list2">Contact Us</li>
//               </ul>
//           </li>
//           <li className="nav-list">
//             <NavLink to="/blogs">Blog</NavLink>
//           </li>
//           <li className="nav-list">
//             <NavLink to="/events">Events</NavLink>
//           </li>
//           <li className="nav-list">
//             <NavLink to="/contactus">Contact us</NavLink>
//           </li>
       
    
//     </div>
//   );
// }