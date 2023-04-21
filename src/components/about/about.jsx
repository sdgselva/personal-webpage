import React from 'react'
import './about.css'
import PICTURE from '../../assets/image-about.jpeg'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me!</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="self__description"></div>
        <div className="main__picture">
          <img src={PICTURE} alt="Self image" />
        </div>

        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nisi blanditiis repellat neque? Explicabo, libero sint voluptates quibusdam deserunt nam perspiciatis earum quia amet. Modi expedita harum ducimus quia corrupti.
        Incidunt molestias quisquam fugiat quia commodi modi, magnam voluptatem aspernatur rerum expedita sed, corporis dicta atque ex corrupti impedit accusamus, iste est itaque nam! Asperiores ullam natus officiis architecto magni.</p>
        <a href="#contact" className='btn btn-primary'>Let's talk!</a>
      </div>
    </section>
  )
}

export default About