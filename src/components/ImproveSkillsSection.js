import React from 'react'

function ImproveSkillsSection() {
  return (
    <div className='fr-improve section'>
      <div className='col fr-improve__img'>
        <img src='/img/gallery/fr-img_10.jpg' alt="" />
      </div>
      <div className='col fr-improve__texts'>
        <h1>Improve Your Skills</h1>

        <ul className='fr-list__pink'>
          <li>Learn new recipes</li>
          <li>Experiment with food</li>
          <li>Know nutrition facts</li>
          <li>Get cooking tips</li>
          <li>Get ranked</li>
        </ul>

        <a className='fr-btn pink' href="/recipes">Signup Now</a>
      </div>
    </div>
  )
}

export default ImproveSkillsSection
