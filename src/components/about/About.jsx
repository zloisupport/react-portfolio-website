import React from 'react'
import {GiGiftOfKnowledge} from 'react-icons/gi'
import {FaUsers} from 'react-icons/fa'
import {RiFolderUploadFill} from 'react-icons/ri'
import './about.css'
import ME from '../../assets/Me.gif'
const About = () => {
  return (
    <section id='about'>
      <h5>Узнать</h5>
      <h2>Обо мне</h2>
      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <GiGiftOfKnowledge className='about__icon'/>
              <h5>Опыт работы</h5>
              <small>2 Года</small>
            </article> 

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Клинеты</h5>
              <small>100 + По Всему Миру</small>
            </article> 

            <article className='about__card'>
              <RiFolderUploadFill className='about__icon'/>
              <h5>Проекты</h5>
              <small>20+ </small>
            </article>  
            
          </div>

          <p>
            Esse aut illo eum odio. Laboriosam earum dicta architecto perspiciatis eius quasi et. Veniam non magni odit accusamus ut atque est. Sit exercitationem veritatis quaerat dolores at officiis natus. Sit qui quam quia magnam corrupti omnis neque doloribus. Illum impedit et aliquam in.
    
    Occaecati adipisci deleniti. Aut exercitationem sit ducimus sequi fugiat ea ducimus at. Perspiciatis et distinctio rerum at ut sit. Adipisci ut minima ut laudantium.
    
    Est consectetur fugiat ratione laudantium quia. Dolore similique asperiores voluptate dicta molestiae placeat. Reprehenderit aut explicabo molestiae sequi omnis hic aliquid sapiente iusto. Iusto dolore ullam quia officia maxime.
              </p>
              <a href="#contact" className='btn btn-primary'>Начать</a>
        </div>
      </div>
    </section>
  )
}

export default About