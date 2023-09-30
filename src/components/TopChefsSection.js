import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faSquareFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

function TopChefsSection() {
  const chefs = [
    {
      link: '/img/top-chiefs/fr-img_1.jpg',
      name: 'Emily Smith',
      local: 'United Kingdom',
      instagram: 'https://www.instagram.com/ecpieritz/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/home'
    },
    {
      link: '/img/top-chiefs/fr-img_2.jpg',
      name: 'Olivia Johnson',
      local: 'France',
      instagram: 'https://www.instagram.com/ecpieritz/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/home'
    },
    {
      link: '/img/top-chiefs/fr-img_3.jpg',
      name: 'Madison Williams',
      local: 'Germany',
      instagram: 'https://www.instagram.com/ecpieritz/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/home'
    },
    {
      link: '/img/top-chiefs/fr-img_4.jpg',
      name: 'Ethan Davis',
      local: 'Italy',
      instagram: 'https://www.instagram.com/ecpieritz/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/home'
    },
    {
      link: '/img/top-chiefs/fr-img_5.jpg',
      name: 'Benjamin Jones',
      local: 'Spain',
      instagram: 'https://www.instagram.com/ecpieritz/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/home'
    },
    {
      link: '/img/top-chiefs/fr-img_6.jpg',
      name: 'Emma Brown',
      local: 'Portugal',
      instagram: 'https://www.instagram.com/ecpieritz/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/home'
    },
  ]
  return (
    <div className='fr-chefs section'>
      <Carousel autoPlay>
        {
          chefs.map((item, index) => (
            <div key={index} className='fr-chefs__img'>
              <img alt="" src={item.link} />
              <div className='fr-chefs__texts'>
              <p className='fr-chefs__texts__name'>{item.name}</p>
              <p className='fr-chefs__texts__local'>{item.local}</p>
                <div className='fr-chefs__texts__socials'>
                  <a href={item.instagram} target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </a>
                  <a href={item.facebook} target='_blank'  rel="noreferrer">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </a>
                  <a href={item.twitter} target='_blank'  rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                </div>
              </div>
            </div>
          ))
        }
        
    </Carousel>
    </div>
  )
}

export default TopChefsSection
