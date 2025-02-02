import React from "react";
import { FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Follow.css";

const socialLinks = [
  { icon: <FaLinkedin />, title: "Follow us on Linkedin", subtitle: "Latest news and updates" },
  { icon: <FaYoutube />, title: "Follow Us on Youtube", subtitle: "Latest news and updates" },
  { icon: <FaFacebook />, title: "Follow us on Facebook", subtitle: "Latest news and updates" },
  { icon: <FaWhatsapp />, title: "WhatsApp Channel", subtitle: "Join the Community" },
];

const Follow = () => {
  return (
    <div className="container social-section">
      <div className="row">
        {socialLinks.map((link, index) => (
          <div key={index} className="col-md-3 col-sm-6 social-card">
            <div className="social-icon">{link.icon}</div>
            <h5 className="follow-title">{link.title}</h5>
            <p className="follow-subtitle">{link.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Follow;
