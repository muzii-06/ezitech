import React from "react";
import "./EventPromo.css";

const EventPromo = () => {
  return (
    // <div className="col-lg-10 mx-auto p-5">
        <div className="row col-lg-10 mx-auto align-items-center justify-content-center mt-5 ">
        <div className="col-lg-6 position-relative ">
      {/* <div className="images-section position-relative"> */}
        {/* <div className="image-section d-flex  "> */}
      <div className="col-lg-4  position-absolute im1 ">

        <img className="w-100 rounded-3 " src="https://ezitech.org/wp-content/uploads/2024/11/sem1-765x1024.webp" alt="Event 1" />
      </div>
      
      <div className="col-lg-4  position-absolute im2">

<img className=" w-100 rounded-3 " src="https://ezitech.org/wp-content/uploads/2024/11/sem2.webp" alt="Event 1"     />
</div>
      <div className="col-lg-4  position-absolute im3">

<img className=" w-100 rounded-3  " src="https://ezitech.org/wp-content/uploads/2024/11/sem3.webp" alt="Event 1"     />
</div>

        {/* </div> */}
        </div>
      {/* </div> */}
      <div className="col-lg-6   ">

      <div className="text-section">
        <button className="info-btn">what we do...?</button>
        <h2>
          Empowering Connections in the <span className="highlight">Digital World</span>
        </h2>
        <p className="subtitle">
          We equip future professionals with the essential tools to thrive in both traditional and digital IT landscapes.
        </p>
        <p className="description">
          With years of experience and countless successful placements, Ezitech Institute has perfected a unique learning process that goes beyond theory. We delve deep into practical skills and real-world applications, helping students understand, connect, and excel in the ever-evolving tech market.
        </p>
        <button className="more-btn">MORE ABOUT US</button>
        </div>
      </div>
      </div>
    // </div>
  );
};

export default EventPromo;