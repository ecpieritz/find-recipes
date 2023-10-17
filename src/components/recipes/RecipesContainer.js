import React from 'react'
import RecipeCard from './RecipeCard'

function RecipesContainer() {
    const recipes = [
      {
        name: "Receita 1",
        desc: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/top-chiefs/fr-img_1.jpg',
        link: 'https://google.com'
      },
      {
        name: "Receita 2",
        desc: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/top-chiefs/fr-img_2.jpg',
        link: 'https://youtube.com'
      },
      {
        name: "Receita 3",
        desc: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/top-chiefs/fr-img_3.jpg',
        link: 'https://intagram.com'
      },
      {
        name: "Receita 4",
        desc: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/top-chiefs/fr-img_4.jpg',
        link: 'https://github.com'
      },
    ]
  return (
    <div className='fr-recipes__container section'>
      {recipes.map((recipe, index) => (
        <RecipeCard name={recipe.name} desc={recipe.desc} img={recipe.img} link={recipe.link} key={index} />
      ))}
    </div>
  )
}

export default RecipesContainer
