import React from 'react';
import StripeDivider from './StripeDivider';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <StripeDivider />
      <div className="footer__inner container">
        <div className="footer__col footer__col--left">
          <img src="/logo_principale.png" alt="Gradino61" className="footer__logo" />
        </div>
        <div className="footer__col footer__col--center">
          <p className="footer__text">GRADINO 61 &middot; CURVA SUD &middot; ROMA</p>
        </div>
        <div className="footer__col footer__col--right">
          <p className="footer__copy">&copy; 2017</p>
        </div>
      </div>
    </footer>
  );
}
