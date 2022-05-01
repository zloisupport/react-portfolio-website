import React from 'react'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

 

import AVACT1 from '../../assets/img/avatar/1.jpg'
import AVACT2 from '../../assets/img/avatar/1.jpg'
import './testimonials.css'
// 
const data = [
  {
    avatar:AVACT1,
    name:'Jess Lang',
    review:'Deserunt cumque sunt perspiciatis laboriosam esse aut et aut. Nesciunt qui est architecto dolores eaque ipsa temporibus blanditiis et. Porro quis itaque molestiae ipsam sunt aliquam. Repellendus qui ipsa qui.'
  },
  {
    avatar:AVACT1,
    name:'Jess Lang',
    review:'Deserunt cumque sunt perspiciatis laboriosam esse aut et aut. Nesciunt qui est architecto dolores eaque ipsa temporibus blanditiis et. Porro quis itaque molestiae ipsam sunt aliquam. Repellendus qui ipsa qui.'
  },
  {
    avatar:AVACT2,
    name:'Jess Lang',
    review:'Deserunt cumque sunt perspiciatis laboriosam esse aut et aut. Nesciunt qui est architecto dolores eaque ipsa temporibus blanditiis et. Porro quis itaque molestiae ipsam sunt aliquam. Repellendus qui ipsa qui.'
  }
]

// 

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
            modules={[Pagination]} 
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className='clinet_name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide> 
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials