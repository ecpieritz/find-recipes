import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function TopChefsSection() {
  const chefs = [
    {
      link: '/img/top-chiefs/fr-img_1.jpg',
      name: 'Emily Smith',
      local: 'United Kingdom',
    },
    {
      link: '/img/top-chiefs/fr-img_2.jpg',
      name: 'Olivia Johnson',
      local: 'France',
    },
    {
      link: '/img/top-chiefs/fr-img_3.jpg',
      name: 'Madison Williams',
      local: 'Germany',
    },
    {
      link: '/img/top-chiefs/fr-img_4.jpg',
      name: 'Ethan Davis',
      local: 'Italy',
    },
    {
      link: '/img/top-chiefs/fr-img_5.jpg',
      name: 'Benjamin Jones',
      local: 'Spain',
    },
    {
      link: '/img/top-chiefs/fr-img_6.jpg',
      name: 'Emma Brown',
      local: 'Portugal',
    },
  ]
  return (
    <div className='fr-chefs section'>
      <Carousel autoPlay>
        {
          chefs.map((item, index) => (
            <div className='fr-chefs__img'>
              <img key={index} alt="" src={item.link} />
              <div className='fr-chefs__texts'>
              <p className='fr-chefs__texts__name'>{item.name}</p>
              <p className='fr-chefs__texts__local'>{item.local}</p>
              </div>
            </div>
          ))
        }
        
    </Carousel>
    </div>
  )
}

export default TopChefsSection
