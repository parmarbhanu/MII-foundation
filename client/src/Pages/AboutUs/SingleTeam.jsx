import React, { useState } from 'react'

export default function SingleTeaMember(props) {
  const [accordion, setaccordion] = useState("zl-staff-item");

  const changeaccordion=()=>{
    if (accordion==="zl-staff-item") {
      setaccordion("zl-staff-item -active")
    }
    else{
      setaccordion("zl-staff-item")
    }
  }  
  return (
    <div>
  <div onClick={changeaccordion} className={accordion} style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)', willChange: 'auto'}}>
            <div className="zl-staff-head">
              <div className="zl-staff-info">
                <div className="zl-staff-item-avatar"><img src={props.img} alt="" /></div>
                <div className="zl-staff-item-name">
                  <h4 >{props.name}</h4>
                  <p>{props.designation}</p>
                </div>
              </div>
              <div className="zl-staff-item-icon">
                <span>
                  <svg className="zl-svgsprite -plus">
                    <use xlinkHref="/assets/img/sprites/svgsprites.svg#plus" />
                  </svg>
                </span>
                <span>
                  <svg className="zl-svgsprite -minus">
                    <use xlinkHref="/assets/img/sprites/svgsprites.svg#minus" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="zl-staff-item-text">
            <p>{props.about}</p>
              <a href={props.link}>Contact</a>
            </div>
          </div>
    </div>
  )
}
