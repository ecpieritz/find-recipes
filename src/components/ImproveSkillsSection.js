import React from 'react'

function ImproveSkillsSection() {
  const list = [
    'Learn new recipes',
    'Experiment with food',
    'Know nutrition facts',
    'Get cooking tips',
    'Get ranked',
  ]
  return (
    <div className='fr-improve section'>
      <div className='col fr-improve__img'>
        <img src='/img/gallery/fr-img_10.jpg' alt="" />
      </div>
      <div className='col fr-improve__texts'>
        <h1>Improve Your Skills</h1>

        <ul className='fr-list__pink'>
          {list.map((item, index) =>(
            <li key={index}>{item}</li>
          ))}
        </ul>

        <a className='fr-btn pink' href="/recipes">Signup Now</a>
      </div>
    </div>
  )
}

export default ImproveSkillsSection
