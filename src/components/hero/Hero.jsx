import React from 'react'
import "./Hero.css"
import heroImg from "../../assets/img/Rectangle 4505 (1).png"
 
const Hero = () => {
  return (
    <div className="container">
    <div className='hero'>
      <img src={heroImg} alt="hero" />
    </div>
    </div>
  )
}

export default Hero