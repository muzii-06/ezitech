import React from 'react'
import { steps_data } from '../data/Steps'
import './Cards.css';
const Cards = ({contentNumber}) => {
  return (
    <>
  
  
    <div className="card p-3 border-0 car  w-sm-50 d-flex flex-column gap-2 flex-start">
        {/* <div className="p-3"> */}
        <span className="fw-bold position-absolute num">
          
              {steps_data[contentNumber].id} 
        </span>
        <p className="text-secondary fs-6 p-0 m-0 ">{steps_data[contentNumber].step}</p>
       <h2 className="fw-bold fonts">{steps_data[contentNumber].heading}</h2>
       <p className="text-secondary p-0 m-0 psize">{steps_data[contentNumber].desc}</p>
        {/* </div> */}
    </div>
    </>
  )
}

export default Cards