import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
//import ava04 from '../../assets/images/ava-4.jpg'
const Testimonials = () => {

    const settings = {
        dots: true,
        inifinity: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slideSToShow: 3,

        ressponsive:[
        {
            breakpoints: 992,
            settings: {
                slideSToShow:2,
                slideStOScroll: 1,
                inifinity: true,
                dots: true,
            },
        },
            {
                breakpoints: 576,
                settings: {
                    slideSToShow:1,
                    slideStOScroll: 1,
                
                },
            },
        ]
    }

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati cum eligendi dolore labore fugit iste porro laudantium iure iusto nesciunt deleniti sequi repellat facilis, est libero, et quis? Ducimus?
        Suscipit rerum labore voluptas! Unde voluptatem consequuntur optio fugit alias saepe molestias soluta illum fugiat? Ad suscipit porro aliquam consequatur id eligendi ipsam voluptates quasi nisi, ipsa officia quaerat sapiente.
        Deserunt consequuntur, ipsam soluta explicabo, quos quibusdam ex impedit quam doloribus, debitis animi natus qui. Explicabo qui tempore ipsam sunt cumque labore omnis magnam, neque consequuntur. Rerum dolorum facere ducimus!.
        </p>
    
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Vasya Kohotiuk</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati cum eligendi dolore labore fugit iste porro laudantium iure iusto nesciunt deleniti sequi repellat facilis, est libero, et quis? Ducimus?
        Suscipit rerum labore voluptas! Unde voluptatem consequuntur optio fugit alias saepe molestias soluta illum fugiat? Ad suscipit porro aliquam consequatur id eligendi ipsam voluptates quasi nisi, ipsa officia quaerat sapiente.
        Deserunt consequuntur, ipsam soluta explicabo, quos quibusdam ex impedit quam doloribus, debitis animi natus qui. Explicabo qui tempore ipsam sunt cumque labore omnis magnam, neque consequuntur. Rerum dolorum facere ducimus!.
        </p>
    
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Dasha Poterevych</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae obcaecati cum eligendi dolore labore fugit iste porro laudantium iure iusto nesciunt deleniti sequi repellat facilis, est libero, et quis? Ducimus?
        Suscipit rerum labore voluptas! Unde voluptatem consequuntur optio fugit alias saepe molestias soluta illum fugiat? Ad suscipit porro aliquam consequatur id eligendi ipsam voluptates quasi nisi, ipsa officia quaerat sapiente.
        Deserunt consequuntur, ipsam soluta explicabo, quos quibusdam ex impedit quam doloribus, debitis animi natus qui. Explicabo qui tempore ipsam sunt cumque labore omnis magnam, neque consequuntur. Rerum dolorum facere ducimus!.
        </p>
    
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Nick Human</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
};

export default Testimonials