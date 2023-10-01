import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faSquareFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  const social = {
      instagram: 'https://www.instagram.com/ecpieritz/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/home'
  }
  return (
    <footer className='fr-footer'>
      <div className='section'>
        <div className='col fr-footer__find'>
        <h3><a href="/" className="fr-footer__find__logo">F<span>in</span>dRecipes</a></h3>
        <p>Your Gateway to Culinary Creativity! Explore a World of Flavors, One Recipe at a Time. Unleash Your Inner Chef and Elevate Home Cooking.</p>
        </div>
        <div className='col fr-footer__contact'>
        <h3>Contact Us</h3>
        <p>find@recipes.com</p>
        <p>+55 91 98765-4321</p>
        <p>5th street, Ananindeua/PA | Brazil</p>
        </div>
        <div className='col fr-footer__socials'>
          <h3>Socials</h3>
          <div>
            <a href={social.instagram} target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href={social.facebook} target='_blank'  rel="noreferrer">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a href={social.twitter} target='_blank'  rel="noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
