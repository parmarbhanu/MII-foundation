// import React from 'react'
// import './Footer.css'
// export default function Footer() {
//   return (
//     <div>
//       <footer id="Footer" className="clearfix" role="contentinfo">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <hr className="no_line" style={{margin: '0 auto 120px'}} /> </div>
//             <div className="col-md-4">
//               <h6>Contact us</h6>
//               <div style={{height: '45px'}} aria-hidden="true" className="wp-block-spacer" />
//               <h4 className="has-text-color" style={{color: '#017fe4'}}><a href="tel:61383766284">+61 (0) 383 766 284</a></h4>
//               <p> <a href="#"><u><span>noreply@envato.com</span></u></a> </p>
//             </div>
//             <div className="col-md-4 mobile-one tablet-one-third">
//               <h6>Links</h6>
//               <div style={{height: '45px'}} aria-hidden="true" className="wp-block-spacer" />
//               <p style={{marginBottom: '30px'}}> <a href="about.html" data-type="URL" data-id="about/index.html">Our company</a> </p>
//               <p style={{marginBottom: '30px'}}> <a href="news.html" data-type="URL" data-id="news/index.html">News</a> </p>
//               <p style={{marginBottom: '30px'}}> <a href="contact.html" data-type="URL" data-id="contact/index.html">Contact</a> </p>
//               <p style={{marginBottom: '30px'}}> <a href="#">Terms of use</a> </p>
//             </div>
//             <div className="col-md-4 mobile-one tablet-one-third">
//               <figure className="wp-block-image size-full"><img src="images/lottie.svg" className="wp-image-26" /> </figure>
//               <div style={{height: '45px'}} aria-hidden="true" className="wp-block-spacer" />
//               <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. </p>
//               <div style={{height: '25px'}} aria-hidden="true" className="wp-block-spacer" />
//               <p> <u><a href="#">Read more</a></u> </p>
//             </div>
//           </div>
//         </div>
//         <div className="footer_copy">
//           <div className="container">
//             <div className="column one mobile-one">
//               <div className> <a id="back_to_top" className="footer_button" href="#"><i className="icon-up-open-big" aria-label="Back to top icon" /></a>
//                 <div className="copyright"> © 2022 - BeTheme. Muffin group - HTML by <a target="_blank" rel="nofollow" href="https://1.envato.market/9ZxXY">BeantownThemes</a> </div>
//                 <ul className="social" role="navigation" aria-label="Social Menu" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer-section">
    <div className="container">
      <div className="footer-cta ">
        <div className="row">
          <div className="column">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt" />
              <div className="cta-text">
                <h4>Find us</h4>
                <span>A.B. Road, Pigdamber, Rau, Indore, Madhya Pradesh 453331 · ~88.2 km</span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="single-cta">
              <i className="fas fa-phone" />
              <div className="cta-text">
                <h4>Call us</h4>
                <span>+91 9876543210</span>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="single-cta">
              <i className="far fa-envelope-open" />
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>mail@info.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content ">
        <div className="row">
          <div className="column">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="index.html">
                  <img
                    src="../public/images/Chess.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="footer-text">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                <a href="#">
                  <i className="fab fa-facebook-f facebook-bg" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter twitter-bg" />
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-g google-bg" />
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            {/* directly on useful parts of pages */}
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">services</a>
                </li>
                <li>
                  <a href="#">portfolio</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Expert Team</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Latest News</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button>
                    <i className="fab fa-telegram-plane" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="column col-left">
            <div className="copyright-text">
              <p>
                Copyright © Software & Development Cell{" "}
                <a href="https://codepen.io/anupkumar92/">Anup</a>
              </p>
            </div>
          </div>
          <div className="column col-right">
            {/* nav links */}
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Offering</a>
                </li>
                <li>
                  <a href="#">Article</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
