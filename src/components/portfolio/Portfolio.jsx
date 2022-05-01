import React from 'react'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio1.webp'
import IMG3 from '../../assets/portfolio1.webp'
import IMG4 from '../../assets/portfolio1.webp'
import IMG5 from '../../assets/portfolio1.webp'
import './portfolio.css'
// dont use the block in production

const data =[
  {
    id:1,
    image:IMG1,
    title:'Title1',
    github:'http://github.com',
    demo:'http:github.com'
  } ,
  {
    id:2,
    image:IMG2,
    title:'Title2',
    github:'http://github.com',
    demo:'http:github.com'
  }
]

// End block

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return (
            <article key={id} className="portfolio__items">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'> Git Hub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
              </div>
            </div>
          </article>       
  
          )  
        })
      }

      </div>
    </section>
  )
}

export default Portfolio