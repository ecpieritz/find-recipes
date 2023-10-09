import React from 'react'

function TextSection() {
  const foodsCol1 = [
    './img/fr-about__img-01.jpg',
    './img/fr-about__img-02.jpg',
  ]
  const foodsCol2 = [
    './img/fr-about__img-03.jpg',
    './img/fr-about__img-04.jpg',
  ]
  return (
    <div className='fr-about__text section'>
      <div className='col'>
        <p>Born in the heart of Ananindeua, Brazil, in 2023, FindRecipes is more than just a website; it's a culinary movement driven by a passion for home cooking and a deep appreciation for flavors from around the world.</p>
        <p>Our mission at FindRecipes is to revolutionize the way people experience food at home. We believe that everyone should have access to delicious, diverse, and easy-to-follow recipes, regardless of their culinary expertise. Our motivation stems from the desire to bring families and friends closer through the joy of cooking and sharing meals together.</p>
        <p>With roots firmly planted in the rich culinary traditions of Brazil, we aim to celebrate the vibrant and unique flavors of our region while also inviting global tastes into our kitchens. FindRecipes is a testament to our commitment to making home cooking an exciting, accessible, and memorable experience for all. Join us on this delectable journey as we continue to inspire and empower home cooks, one recipe at a time, since 2023.</p>
      </div>
      <div className='col-25 fr-about__text__foods'>
      {
          foodsCol1.map((item, index) => (
            <div key={index} className='fr-about__text__img'>
              <img alt="" src={item} />
            </div>
          ))
        }
      </div>
      <div className='col-25 fr-about__text__foods'>
      {
          foodsCol2.map((item, index) => (
            <div key={index} className='fr-about__text__img'>
              <img alt="" src={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TextSection
