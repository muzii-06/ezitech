import React from 'react'
import Top from './Top'
import NavBar from './NavBar'
import Animated from './Animated'
import Marquee from './Marquee'
import Steps from './Steps'

const Home = () => {
  return (
    <>
    <div className="back-img ">

<div className="overlay">
  
 <Top/>
 <NavBar/>
 <Animated/>
</div>
</div>
<Marquee />

<Steps/>
    </>
  )
}

export default Home