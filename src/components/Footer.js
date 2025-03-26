import React from 'react';
import './Footer.css'; // Zorg ervoor dat je deze CSS-bestand aanmaakt

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <span>&copy; {currentYear} - Owen Coenraad</span>
    </footer>
  );
};

export default Footer;
