import React, { useEffect } from 'react'
import "./scrollanimation.css"
export default function ScrollAnimation() {
  return (
    <div>
        
<section class="scroll">
  <div class="scroll__view no-skrollr" id="scrollslider" data-current="1">
<div class="scroll__content scroll__hero is-alwayssticky">
    <div class="scroll__sectionwrapper " style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
    <div className=''>
            {/* <i class="fa-solid fa-chess-pawn fa-9x"></i>  */}
            <i class="fa-solid fa-chess fa-9x"></i>
    </div>
    <div className=''>
    {/* <i class="fa-light fa-chess-bishop-piece"></i> */}
    </div>
    
    </div>
    </div>
    <div class="scroll__overlays" >
      <div class="scroll__content is-desktopsticky">
        <div class="scroll__sectionwrapper">
          <div class="scroll__text">
          <div style={{ color: "#38362f" }}>
                        <h1 style={{
                            fontSize: "80px",
                            // lineHeight: "80px",

                        }} >Incubation  <i class="fa-solid fa-chess-pawn"></i></h1>
                        <p style={{
                            fontSize: "24px",
                            lineHeight: "35px",
                            opacity: ".5"
                        }}>Ideation, technology, compliance</p></div>

          </div>
        </div>
      </div>
      <div class="scroll__content is-desktopsticky">
        <div class="scroll__sectionwrapper">
          <div class="scroll__text">
          <div style={{ color: '#000000' }}>
                        <h1 style={{
                            fontSize: "80px",
                            color: '#000000'
                            // lineHeight: "80px",

                        }} >Accelaration <i class="fa-solid fa-chess-bishop"></i></h1>
                        <p style={{
                            fontSize: "24px",
                            lineHeight: "35px",
                            opacity: ".5"
                        }}>Ideation, technology, compliance</p></div>


          </div>
        </div>
      </div>
      <div class="scroll__content is-desktopsticky">
        <div class="scroll__sectionwrapper">
          <div class="scroll__text">
          <div style={{ color: "#000000" }}>
                        <h1 style={{
                            fontSize: "80px",
                            // lineHeight: "80px",

                        }} >Adoption <i class="fa-solid fa-chess-queen"></i></h1>
                        <p style={{
                            fontSize: "24px",
                            lineHeight: "35px",
                            opacity: ".5"
                      }}>Ideation, technology, compliance</p></div>          </div>
        </div>
      </div>
      {/* <div class="scroll__content is-desktopsticky">
        <div class="scroll__sectionwrapper">
          <div class="scroll__text">
            <h1>Iteration</h1>
            <p>Second Text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, culpa! Labore corrupti deleniti animi velit maiores dignissimos asperiores culpa explicabo, illo dolorem! Dolor sapiente nesciunt dolorum saepe, ab fugiat ipsam? </p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>
    </div>
  )
}
