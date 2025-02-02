import React from 'react'
import { IoIosCall } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF,FaInstagram,FaBehance,FaLinkedinIn,FaYoutube  } from "react-icons/fa";
import './Top.css';
const Top = () => {
  return (
    <>
    <div className="p-4 container topbar  mx-auto">

    <div className="d-flex justify-content-around ">
        <div className="d-flex gap-4">

        <div className="d-flex align-items-center ">
       < IoIosCall className='text-white' size={25} />
       <span className="text-white p-0 m-0 font ">+923455555396</span> 
        </div>
        <div className="d-flex align-items-center gap-1">
       < TiMessages className='text-white' size={25} />
       <span className="text-white p-0 m-0 font ">INFO@EZITECH.ORG</span> 
        </div>
        <div className="d-flex align-items-center gap-1">
       < CiLocationOn className='text-white' size={25} />
       <span className="text-white p-0 m-0 font">WESTRIDGE 1,OFFICE #304-G PESHAWAR ROAD, RAWALPINDI, PAKISTAN</span> 
        </div>
        </div>
       <div className="d-flex align-items-center justify-content-center gap-2">
        <FaFacebookF className='text-white' size={22}/>
        <FaInstagram className='text-white' size={22}/>
        <FaBehance className='text-white' size={22}/>
        <FaLinkedinIn className='text-white' size={22}/>
        <FaYoutube className='text-white' size={22}/>
        
       </div>
    </div>
    </div>
    </>
  )
}

export default Top