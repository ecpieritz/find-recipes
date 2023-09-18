export default function Navbar() {
  return (
    <nav className="fr-navbar">
      <a href="/" className="fr-navbar__logo">F<span>in</span>dRecipes</a>

      <div className="fr-navbar__links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/recipes">Recipes</a>
        <a href="/settings">Settings</a>
      </div>
      <div className="fr-navbar__sidebar-btn active">
        <div className="fr-navbar__sidebar-btn__bar"></div>
        <div className="fr-navbar__sidebar-btn__bar"></div>
        <div className="fr-navbar__sidebar-btn__bar"></div>
      </div>
    </nav>
  )
}