import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <section className="footer-box">
        <div className="footer-top">
          <h2>Want to know more?</h2>
          <a href="#">Get in touch</a>
        </div>
        <div className="footer-mid">
          <div className="footer-mid-l1">
            <a className="footer-mid-l1-nav" href="/ourofferings"><span>About Us</span></a>
            <a className="footer-mid-l1-nav" href="/ourofferings"><span>Services</span></a>
            {/* <a className="footer-mid-l1-nav" href="/ourofferings"><span>SocialMedia Icons</span></a> */}
            <a className="footer-mid-l1-nav" href="/ourofferings"><span>Address</span></a>
            {/* <a className="footer-mid-l1-nav" href="/blogs"><span>Blogs</span></a>
            <a className="footer-mid-l1-nav" href="/contactus"><span>Contact Us</span></a> */}
          </div>
          <div className="footer-mid-l2 social-icons">
            <a className="footer-mid-l2-social" href="/aboutus" target="_blank" >
              <i class="fa-brands fa-facebook "></i>
            </a>
            <a className="footer-mid-l2-social" href="#" target="_blank" >
            <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a className="footer-mid-l2-social"  href="#" target="_blank" >
            <i  class="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="footer-bottom">
            <small>Copyright @Medicaps Software Cell</small>
          </div>
        </div>
      </section>
    </div>
  )
}
