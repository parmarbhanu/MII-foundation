import React from "react";
import "./Offering.css";
export default function Offering() {
  return (
    <>
      <div className="offering">
        <div className="title" style={{ textAlign: "center", padding: "20px" }}>
          Offering
        </div>

        <div className="main_heading">
          <div className="heading-text">
            <h2 style={{ fontSize: "50px", marginLeft: "30px" }}>
              MII Foundation offers two main services
            </h2>
            <h4 style={{ fontSize: "22px", marginLeft: "30px" }}>
              Incubation and Consulting - to help start-ups grow and succeed.
            </h4>
          </div>
          <div className="img-contain">
           
              <img
                src="https://www.aic-audf.org/wp-content/uploads/2021/10/business-team-discussing-ideas-startup_74855-4380.jpg"
                alt="icon"
              />
          </div>
        </div>

        
        <div className="Incubation">
          <h1 style={{ fontSize: "40px", marginLeft: "20px" }}>Incubation</h1>
          <div className="border">
            <>
              <div className="textincubation">Mentoring</div>
            </>
            <div className="minitext">
              Receive guidance and support from experienced professionals.
            </div>
            <>
              <div className="textincubation">Seed-Fund Investment</div>
            </>
            <div className="minitext">
              Get access to seed-fund investment to help grow your business.
            </div>
            <>
              <div className="textincubation">Access to Events</div>
            </>
            <div className="minitext">
              Attend events and network with other entrepreneurs.
            </div>
            <>
              <div className="textincubation">Co-working</div>
            </>
            <div className="minitext">
              Work in a collaborative environment with other start-ups.
            </div>
            <>
              <div className="textincubation">HR Access</div>
            </>
            <div className="minitext">
              Connect with human resources professionals to help with hiring and
              HR needs.
            </div>
            <>
              <div className="textincubation">Interns</div>
            </>
            <div className="minitext">
              Hire interns to help with your business operations.
            </div>
            <>
              <div className="textincubation">Research Support</div>
            </>
            <div className="minitext">
              Receive support with research and market analysis.
            </div>
            <>
              <div className="textincubation">Business Plan Development</div>
            </>
            <div className="minitext">
              Get assistance with developing a solid business plan.
            </div>
          </div>{" "}
        </div>
        <div className="Consulting">
          <h1 style={{ fontSize: "40px", marginLeft: "20px" }}>Consulting</h1>
          <div className="textconsulting">Support</div>
          <div className="con_minitext">
            Get tailored support by filling out a form to let us know what you
            need help with.
          </div>
        </div>
        <div className="notation">
          <h2 style={{ padding: "130px", textAlign: "center" }}>
            "Choose MII Foundation to help bring your entrepreneurial vision to
            life. Get the support you need to grow your business and succeed."
          </h2>
        </div>
      </div>
    </>
  );
}
