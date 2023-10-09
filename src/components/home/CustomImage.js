import React from 'react'

function CustomImage({imgSrc, pt}) {
  return (
    <div className='fr-custom-image'
      style={{paddingTop: pt}}
    >
      <img src={imgSrc} alt="Foodies" />
    </div>
  )
}

export default CustomImage
