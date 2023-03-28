import React from "react";
import Ourpartner from "../AboutUs/Ourpartner";
import "./Herosection.css";
import ScrollAnimation from "./Home/ScrollAnimation";
const Herosection = () => {
  return (
    <>
      <div className="home-section-container">
        <div className="home-section-1-container">
          <div className="section-1-text">
            <div className="section-1-heading">
              <h3 className="section-1-home-container1">MI</h3>
              <h3 className="section-1-home-container2">I&nbsp;</h3>
              <h3 className="section-1-home-container3">Foundation</h3>
            </div>
            <div className="section-1-slogan">
              <h3 className="mii-slogan">"Unlock Your Business Potential"</h3>
            </div>
          </div>
          <div className="section-1-image">
            <img
              className="hero-section-1-img"
              src="https://i.imgur.com/zyYhckH.gif"
              alt=""
            />
          </div>
        </div>
        <div className="section2-home-page">
          <div className="section2-container">
            <div className="section2-heading">
              <h1>Create a perfect ecosystem for your business</h1>
            </div>
            <div className="section2-content">
              <p>MII Foundation, a Section-8 company based in India, is an
              incubator dedicated to supporting and nurturing innovative
              start-ups at Medi-Caps University in Indore. As a start-up
              incubator, MII Foundation provides a collaborative and inclusive 
              environment for entrepreneurs to grow their businesses.</p>

              <p style={{margin: "10px 0"}}>At MII Foundation, we have a culture that is collaborative,
              inclusive, and centered around innovation and creativity. We
              believe in fostering a supportive environment where start-ups can
              come together to share ideas, knowledge, and experiences.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="simple_text">
          <div className="left_simple">
            <h2>
              MII Foundation, a Section-8 company based in India, is an
              incubator dedicated to supporting and nurturing innovative
              start-ups at Medi-Caps University in Indore. As a start-up
              incubator, MII Foundation provides a collaborative and inclusive 
              environment for entrepreneurs to grow their businesses.
            </h2>
          </div>
          <div className="right_simple">
            <h3>
              At MII Foundation, we have a culture that is collaborative,
              inclusive, and centered around innovation and creativity. We
              believe in fostering a supportive environment where start-ups can
              come together to share ideas, knowledge, and experiences.
            </h3>
          </div>
        </div> */}
      {/* <div className="simple_text">
        <div className="left_img">
          <img
            class="scale-with-grid"
            src="https://beantown.website/html/be/html/content/lottie/images/lottie-home-pic1.webp"
            alt="lottie-home-pic1"
            width="1374"
            height="1190"
          />
        </div>
        <div className="right_img_text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            alias fugiat dolorem magni hic expedita accusamus quos obcaecati
            enim eos sapiente laudantium officia, minima quasi voluptas animi,
            nulla placeat beatae.
          </p>
        </div>
      </div> */}
      <ScrollAnimation/>
      <Ourpartner/>
    </>
  );
};

export default Herosection;
