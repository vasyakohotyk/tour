import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg = '6'>
                <div className="newsletter__content">
                    <h2>Subscribe now get useful traveling information</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus laudantium non perferendis. Necessitatibus eaque modi natus eius aut? Officia atque optio laborum quia facere eius neque totam ut nam fuga!
                    Aperiam dolores ut, a ratione ipsam in sint hic cum dolore vel nam nihil natus debitis ducimus iure fugit non pariatur deleniti repellendus? Facilis reiciendis modi voluptate nam molestiae esse!
                   </p>
                </div>
            </Col>

            <Col lg = '6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter