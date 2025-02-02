import React from 'react'
import Top from './Top'
import NavBar from './NavBar'
import Animated from './Animated'
import Marquee from './Marquee'
import Steps from './Steps'
import EventPromo from './EventPromo'
import InternStats from './InternStats'

const Home = () => {
  
  return (
    <>
    {/* <div className="overlay "> */}

    <div className="back-img ">


  
 <Top/>
 <NavBar/>
 <Animated/>
</div>
    {/* </div> */}

<Marquee />

<Steps/>
<EventPromo/>
<InternStats/>
    </>
  )
}

export default Home