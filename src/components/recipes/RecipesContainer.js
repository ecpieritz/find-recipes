import React from 'react'
import RecipeCard from './RecipeCard'

function RecipesContainer() {
    const recipes = [
      {
        name: "Sushi",
        desc: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/recipes/fr-recipes__01.jpg',
        link: '#!'
      },
      {
        name: "Fruit Ice Cream",
        desc: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/recipes/fr-recipes__02.jpg',
        link: '#!'
      },
      {
        name: "Red berries cake",
        desc: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/recipes/fr-recipes__03.jpg',
        link: '#!'
      },
      {
        name: "Burger",
        desc: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/recipes/fr-recipes__04.jpg',
        link: '#!'
      },
      {
        name: "Fish",
        desc: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/recipes/fr-recipes__05.jpg',
        link: '#!'
      },
      {
        name: "Pizza",
        desc: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/recipes/fr-recipes__06.jpg',
        link: '#!'
      },
      {
        name: "Spring salad",
        desc: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/recipes/fr-recipes__07.jpg',
        link: '#!'
      },
      {
        name: "Brigadeiro",
        desc: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/recipes/fr-recipes__08.jpg',
        link: '#!'
      },
      {
        name: "Chicken, broccoli and fries",
        desc: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        img: '/img/recipes/fr-recipes__09.jpg',
        link: '#!'
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
