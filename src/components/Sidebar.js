import React from 'react'

export default function Sidebar({links}) {
  return (
    <div className='fr-sidebar'>
      {links.map(link => (
        <a href={link.path} key={link.name}>{link.name}</a>
      ))}
    </div>
  )
}
