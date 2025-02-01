import React from 'react'
import Cards from './Cards'
import './Cards.css';
const Steps = () => {
  return (
    <>
    <div className="container-fluid">

    <div className="col-lg-6 mx-auto  mt-5 ">

    <h3 className="fw-bold display-6 text-center">
    Shaping and Empowering Future IT Talent Through a Seamless Process
    </h3>
    </div>
    <div className="col-xl-9 col-lg-12 mx-xl-auto   p-5 p-sm-0   mt-5 back-card position-relative">

    <div className="row justify-content-between align-items-center  ">
        <div className="col-xl-4 col-lg-4 col-md-4     ">
            <Cards contentNumber={0} />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4    ">
            <Cards contentNumber={1} />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4    ">
            <Cards contentNumber={2} />
        </div>
    </div>

    </div>
    </div>
    
    </>
  )
}

export default Steps