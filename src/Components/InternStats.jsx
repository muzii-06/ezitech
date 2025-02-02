import React from "react";
import "./InternStats.css"; // Import the CSS file

const InternStats = () => {
  return (
    <div className="container marg my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 text-section1">
          <h2 className="fw-bold heading">
            Hundreds of <br />
            <span className="text-dark">Successful Internships & Countings</span>
          </h2>
          <div className="blue-line"></div>
          <p className="mt-3 text-muted">
            With a commitment to quality training and career advancement, we've
            empowered students from diverse backgrounds. Through structured
            Internship, hands-on projects, and expert mentorship, Ezitech
            Institute ensures that every student builds a solid foundation in IT.
          </p>
        </div>

        {/* Right Section - Stats */}
        <div className="col-lg-6 mt-4 mt-lg-0">
          <div className="stats-box p-4 shadow-sm rounded-3">
            <div className="row text-center">
              <div className="col-6 border-end">
                <p className="stats-number">37+</p>
                <p className="stats-label">Industry MoUs</p>
              </div>
              <div className="col-6">
                <p className="stats-number">327</p>
                <p className="stats-label">Active Students</p>
              </div>
            </div>
            <div className="row text-center mt-3">
              <div className="col-6 border-end">
                <p className="stats-number">98%</p>
                <p className="stats-label">Positive Feedback</p>
              </div>
              <div className="col-6">
                <p className="stats-number">6,663</p>
                <p className="stats-label">Successful Graduates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternStats;
