import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar({links, close}) {
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
