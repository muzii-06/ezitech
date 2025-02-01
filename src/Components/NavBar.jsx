import React from 'react'
import './NavBar.css';
const NavBar = () => {
  return (
    <>
    
        <ul className="list-unstyled d-flex gap-5 align-items-center  text-black text-uppercase nav   rounded-4 mx-auto">
            <img className='logo' width={"100"} src="https://ezitech.org/wp-content/uploads/2021/07/blue-official.png" alt="" />
            <li className='fs-6'>
            <p className='p-0 m-0'>
               Home
                </p>
            </li>
            <li className='fs-6'>
            <p className='p-0 m-0'>
               About
                </p>
            </li>
            <li className='fs-6'>
            <p className='p-0 m-0'>
               Internship's
                </p>
            </li>
            <li className='fs-6'>
            <p className='p-0 m-0'>
               Careers
                </p>
            </li>
            <li className='fs-6'>
            <p className='p-0 m-0'>
              Courses
                </p>
            </li>
            <li className='fs-6'>
            <p className='p-0 m-0'>
             Tech Blogs
                </p>
            </li>
            <button className=" border-0 text-uppercase text-white rounded-pill log shadow">iportal login</button>
        </ul>
    
    </>
  )
}

export default NavBar