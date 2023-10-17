import React from 'react'

function PreviousSearches() {
  const searches = [
    'pizza',
    'cookies',
    'burguer',
    'sushi',
    'pasta',
    'juice',
    'smoothie',
    'lasagna',
    'soup'
  ]
  return (
    <div className='fr-recipes__previous-searches section'>
      <h2>Previous Searches</h2>
      <div className='fr-recipes__previous-searches__container'>
        {searches.map(search =>(
          <div className='fr-recipes__previous-searches__container__item'><p>{search}</p></div>
        ))}
      </div>
    </div>
  )
}

export default PreviousSearches
