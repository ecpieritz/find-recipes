import React from 'react'
import CustomImage from './CustomImage'

export default function HeroSection() {
  const images = [
    './img/gallery/fr-img_1.jpg',
    './img/gallery/fr-img_2.jpg',
    './img/gallery/fr-img_3.jpg',
    './img/gallery/fr-img_4.jpg',
    './img/gallery/fr-img_5.jpg',
    './img/gallery/fr-img_6.jpg',
    './img/gallery/fr-img_7.jpg',
    './img/gallery/fr-img_8.jpg',
    './img/gallery/fr-img_9.jpg'
  ]
  return (
    <div className='fr-hero section'>
      <div className='col fr-hero__texts'>
        <h1>What Are We About</h1>
        <p>Your Gateway to Culinary Creativity! Explore a World of Flavors, One Recipe at a Time. Unleash Your Inner Chef and Elevate Home Cooking. Join Us on a Gastronomic Journey Today!</p>
        <a className='fr-btn pink' href="/recipes">Explore Now</a>
      </div>
      <div className='col fr-hero__gallery'>
        {images.map((src, index) => (
          <CustomImage imgSrc={src} pt={"85%"} key={index} />
        ))}
      </div>
    </div>
  )
}
