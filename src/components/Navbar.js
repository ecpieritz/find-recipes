import { useState } from "react"

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <nav className="fr-navbar">
      <a href="/" className="fr-navbar__logo">F<span>in</span>dRecipes</a>

      <div className="fr-navbar__links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/recipes">Recipes</a>
        <a href="/settings">Settings</a>
      </div>
      <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "fr-navbar__sidebar-btn active" : "fr-navbar__sidebar-btn"}>
        <div className="fr-navbar__sidebar-btn__bar"></div>
        <div className="fr-navbar__sidebar-btn__bar"></div>
        <div className="fr-navbar__sidebar-btn__bar"></div>
      </div>
    </nav>
  )
}