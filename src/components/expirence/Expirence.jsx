import React from 'react'
import {DiReact} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {DiCss3} from 'react-icons/di'
import {AiOutlineHtml5} from 'react-icons/ai'
import {BsBootstrap} from 'react-icons/bs'
import {SiPhp} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiCsharp} from 'react-icons/si'
import {DiPython} from 'react-icons/di'
import './expirence.css'
const Expirence = () => {
  return (
    <section id='expirence'>
      <h5>What Skills I Have</h5>
      <h2>My Expirence</h2>

      <div className="container expirence__container">
          <div className="expirence_frontend">
            <h3>Frontend Development</h3>
            <div className="expirence__content">
              <article className="expirence__details">
                <AiOutlineHtml5 className='expirence__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Expirenced</small>
                </div>
               
              </article>

              <article className="expirence__details">
                <DiCss3 className='expirence__details-icon'/>
                 <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="expirence__details">
                <DiJavascript className='expirence__details-icon'/>
                 <div>
                <h4>JS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="expirence__details">
                <BsBootstrap className='expirence__details-icon'/>
                 <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Expirenced</small>
                </div>
              </article>

                <article className="expirence__details">
                <DiReact className='expirence__details-icon'/>
                 <div>
                <h4>React</h4>
                <small className='text-light'>Expirenced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="expirence_backend">
          <h3>Backend Development</h3>
            <div className="expirence__content">
              <article className="expirence__details">
                <SiPhp className='expirence__details-icon'/>
                 <div>
                <h4>PHP</h4>
                <small className='text-light'>Expirenced</small>
                </div>
              </article>

              <article className="expirence__details">
                <DiPython className='expirence__details-icon'/>
                 <div>
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="expirence__details">
                <SiCsharp className='expirence__details-icon'/>
                 <div>
                  <h4>C#</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className="expirence__details">
                <GrMysql className='expirence__details-icon'/>
                 <div>
                <h4>Mysql</h4>
                <small className='text-light'>Expirenced</small>
                </div>
              </article>

              
            </div>
          </div>
      </div>

    </section>
  )
}

export default Expirence