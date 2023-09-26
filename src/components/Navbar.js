import { useState } from "react"
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Recipes',
      path: '/recipes'
    },
    {
      name: 'Settings',
      path: '/settings'
    },
  ]
  return (
    <>
      <nav className="fr-navbar">
        <a href="/" className="fr-navbar__logo">F<span>in</span>dRecipes</a>

        <div className="fr-navbar__links">
          {links.map(link => (
            <a href={link.path} key={link.name}>{link.name}</a>
          ))}
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "fr-navbar__sidebar-btn active" : "fr-navbar__sidebar-btn"}>
          <div className="fr-navbar__sidebar-btn__bar"></div>
          <div className="fr-navbar__sidebar-btn__bar"></div>
          <div className="fr-navbar__sidebar-btn__bar"></div>
        </div>
      </nav>
      <Sidebar />
    </>
  )
}