import React from "react";
import "./Start.css";

const Start = () => {
  return (
    <div className="col-lg-10 mx-auto shadow scontainer rounded-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-6">
          <h2 className="ssize">Ready to get started?</h2>
          <p className="sdesc">
            At Ezitech, we constantly push boundaries to deliver excellence.
            Our commitment to quality and innovation makes us your trusted
            partner for growth and success.
          </p>
        </div>
        <div className="col-xl-6 text-center">
            <div className="circlesection position-relative">
                <div className="circle position-absolute">
                    <img src="https://ezitech.org/wp-content/uploads/2024/11/21-150x150.webp" alt="" />
                </div>
          <div className="button-container">
            <button>GET STARTED NOW</button>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
