import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
      <div className='fr-recipes__previous-searches__box'>
          <input type='text' placeholder='Search' />
          <button className='fr-recipes__previous-searches__box__btn'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
      </div>
    </div>
  )
}

export default PreviousSearches
