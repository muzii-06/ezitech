import React from "react";
import "./Alumni.css";

const testimonials = [
  {
    name: "Qamar N.",
    role: "MERN Developer",
    feedback:
      "In the early stages of my MERN Stack internship, and I'm already impressed by the guidance and mentorship. Ezitech has exceeded my expectations!",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    icon: "🔗",
  },
  {
    name: "Fatima S.",
    role: "Graphics Designer",
    feedback:
      "Early in my Graphic Design internship, and I’m already impressed by the mentorship and support. Ezitech provides the perfect environment!",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    icon: "✍️",
  },
  {
    name: "Muzammil J.",
    role: "WordPress Dev.",
    feedback:
      "Just started my WordPress internship, and I'm already impressed by the support. Ezitech offers a great environment to build real skills.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    icon: "👨‍💻",
  },
  {
    name: "Amir K.",
    role: "Machine Learning",
    feedback:
      "I'm in the early stages of my Machine Learning internship, and I'm amazed by the depth of expertise and support from the mentors.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    icon: "🤖",
  },
];

const Alumni = () => {
  return (
    <div className="alumni-section">
      <h2>Alumni <span role="img" aria-label="emoji">😍</span></h2>
      <p>
        Our interns consistently share positive experiences, highlighting the practical
        skills and professional growth they achieve with us.
      </p>

      <div className="testimonial-slider">
        <div className="testimonial-track">
          {[...testimonials,...testimonials].map((item, index) => (
            <div className="testimonial-card " key={index}>
              <div className="d-flex alig-items-center gap-3">

              <img src={item.image} alt={item.name} className="profile-pic" />
              <div className="d-flex flex-column">
              <h4 className="role">{item.role}</h4>

              <h3>{item.name}</h3>
              </div>
              </div>
              <p className="feed">{item.feedback}</p>
              {/* <span className="testimonial-icon">{item.icon}</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
