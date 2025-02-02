import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p>Office #304-B, Amna Plaza, Main Peshawar Rd, Rawalpindi, Punjab</p>
            <p>(92) 337-7777860</p>
            <p><a href="mailto:info@ezitech.org" className="email-link">info@ezitech.org</a></p>
          </div>
          <div className="col-md-3">
            <h5>Explore More</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Internships</h5>
            <ul className="list-unstyled">
              <li><a href="#">Strategy</a></li>
              <li><a href="#">eCommerce</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Branding</a></li>
              <li><a href="#">Design</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Updates</h5>
            <p>Subscribe our newsletter to get the latest news & updates.</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter email address" />
              <button className="btn btn-dark">GO</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
