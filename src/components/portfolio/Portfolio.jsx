import React from 'react'
import "./portfolio.css"
import Img1 from "../../assets/portfolio1.jpg"
import Img2 from "../../assets/portfolio2.jpg"
import Img3 from "../../assets/portfolio3.jpg"
import Img4 from "../../assets/portfolio4.jpg"
import Img5 from "../../assets/portfolio5.png"
import Img6 from "../../assets/portfolio6.jpg"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
          <h3>Portfolio Neog</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/akshatpal/akshat-portfolio-neog" className='btn' target="_blank"  rel="noreferrer noopener">Github</a>
            <a href="https://akshat-neog-portfolio.netlify.app/" className='btn btn-primary' target="_blank"  rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img2} alt="" />
          </div>
          <h3>Banana Language</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/akshatpal/neog-camp-banana-speak" className='btn' target="_blank"  rel="noreferrer noopener">Github</a>
            <a href="https://akshat-neog-banana-speak.netlify.app/" className='btn btn-primary' target="_blank"  rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img3} alt="" />
          </div>
          <h3>Portfolio using Html,css,js</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/akshatpal/portfolio" className='btn' target="_blank"  rel="noreferrer noopener">Github</a>
            <a href="https://akshat-pal.netlify.app" className='btn btn-primary' target="_blank"  rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img4} alt="" />
          </div>
          <h3>To-Do List App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/akshatpal/todo-list" className='btn' target="_blank"  rel="noreferrer noopener" >Github</a>
            <a href="https://todo-akshat.netlify.app" target="_blank"  rel="noreferrer noopener" className='btn btn-primary' >Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img5} alt="" />
          </div>
          <h3>How well do you know me?</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/akshatpal/how-well-do-you-know-me-repl.it" className='btn' target="_blank"  rel="noreferrer noopener">Github</a>
            <a href="https://replit.com/@Akshatpal1/firstCLIApp#index.js" className='btn btn-primary' target="_blank"  rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img6} alt="" />
          </div>
          <h3>UI & UX</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/akshatpal/only-ui-ux" className='btn' target="_blank"  rel="noreferrer noopener">Github</a>
            <a href="https://akshat-ui-ux.netlify.app" className='btn btn-primary' target="_blank"  rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio