import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Am Practicing</h5>
      <h2>Works</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-End basic designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use of intermediatte CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Classy Footer.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Well maintained carts...</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HD Images...</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>To Do List App using ReactJs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>PortFolio Neog Camp.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Banana Language..</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>How well do you know me?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolio Website using HTML,CSS ans JS only.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Emoji Interpreter(incomplete)</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Programming</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Command on Arrays(Java)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Command on Strings(Java)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Stacks,Hashing,Linked Lists.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Binary Search Tree(Basics only)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>MySQL queries..</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services