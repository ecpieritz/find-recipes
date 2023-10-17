import React from 'react'

function RecipeCard({name,desc,img,link}) {
  return (
    <div className='fr-recipes__container__card'>
      <div className='fr-recipes__container__card__img'>
        <img src={img} alt="" />

     </div>
     <div className='fr-recipes__container__card__text'>
      <h4>{name}</h4>
      <p>{desc}</p>
      <a href={link} target='_blank' rel="noreferrer">VIEW RECIPE</a>
     </div>

  </div>
  )
}

export default RecipeCard
