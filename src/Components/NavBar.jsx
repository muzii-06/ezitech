import React from 'react'
import './NavBar.css';
import { IoMenu } from "react-icons/io5";
const NavBar = () => {
  return (
    <>
       
        <div className="d-flex align-items-center justify-content-between gap-4 nav rounded-4 mx-auto ">
     
            <img className='logo ' width={"100"} src="https://ezitech.org/wp-content/uploads/2021/07/blue-official.png" alt="" />
        <ul className="list-unstyled contents d-flex m-0 gap-5 align-items-center  justify-content-center text-black text-uppercase  ">
            <li className='fs-6 setsize setsize'>
            <p className='p-0 m-0'>
               Home
                </p>
            </li>
            <li className='fs-6 setsize'>
            <p className='p-0 m-0'>
               About
                </p>
            </li>
            <li className='fs-6 setsize'>
            <p className='p-0 m-0'>
               Internship's
                </p>
            </li>
            <li className='fs-6 setsize'>
            <p className='p-0 m-0'>
               Careers
                </p>
            </li>
            <li className='fs-6 setsize'>
            <p className='p-0 m-0'>
              Courses
                </p>
            </li>
            <li className='fs-6 setsize'>
            <p className='p-0 m-0'>
             Tech Blogs
                </p>
            </li>
        </ul>
            <button className=" border-0 text-uppercase text-white rounded-pill log shadow m-0">iportal login</button>
            <IoMenu  className='menu' size={30} />
        </div>
             
    
    </>
  )
}

export default NavBar