import React from 'react'
import agustin from '../public/assets/agustin.jpg'
import gian from '../public/assets/gian.jpg'
export function About() {
  return (
    <div id='2'>
        <h2 className='About-title'>About own team!</h2>
        <h3 className='About-subtitle'>Meet the guys of the Agency...</h3>
        <div className='AboutCon'>
            <img className='prof-img' src={agustin} alt="agus"/>
            <p className='Aboutp'>Hey my name is Agustin  im from Argentina, and i have 2 years solving problems in Mobile Apps creating easy solutions.</p>
            <img className='prof-img' src={gian} alt="gian" />
            <p className='Aboutp'>My Name is Gian  im Back-ennd Developer for 10 years of experience in I.T sector.</p>
        </div>
    </div>
  )
}

export default About