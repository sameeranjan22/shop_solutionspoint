import React from 'react';
import SPLogo from '../../S P 2.png';
import './footer.css';

const Footer = () => (
  <div className="sp__footer section__padding">
    <div className="sp__footer-heading">
      <h1 className="gradient__text">Review & Rate us on Google!</h1>
    </div>

    <div className="sp__footer-btn">
      <a href="https://www.shorturl.at/dwIZ6"><p>Click Here to Review</p></a>
    </div>

    <div className="sp__footer-links">
      <div className="sp__footer-links_logo">
        <img src={SPLogo} alt="footer_logo" />
      </div>
      <div className="sp__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="sp__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="sp__footer-links_div">
        <h4>Get in touch</h4>
        <p>U-207 3rd Floor Shakarpur</p>
        <p>New Delhi - 110092</p>
        <p>Contact 8130494920</p>
        <p>info@solutionspoint.net</p>
      </div>
    </div>

    <div className="sp__footer-copyright">
      <p>Design and Developed by Sameer Ranjan</p>
      <p>@2022 S P Solutions Point Pvt. Ltd. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
