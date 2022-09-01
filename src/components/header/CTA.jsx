import React from 'react'
import Resume from "../../assets/Resume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} className='btn' target="_blank"  rel="noreferrer noopener">Download Resume</a>
        <a href="#contact" className='btn-primary btn'>Let's talk</a>
    </div>
  )
}

export default CTA