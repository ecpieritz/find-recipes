import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar({links, close}) {
  return (
    <div className='fr-sidebar' onClick={close}>
      {links.map(link => (
        <a className='fr-sidebar__link' href={link.path} key={link.name}>
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </a>
      ))}
    </div>
  )
}

export default Sidebar
