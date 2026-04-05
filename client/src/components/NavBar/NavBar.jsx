import React from 'react';
import { Menu, X } from 'lucide-react';
import './NavBar.css';

const NavBar = ({ currentLang, onChangeLang, texts, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </div>
        <img 
          className="desktop-logo"
          src='https://storage.123fakturera.se/public/icons/diamond.png' 
          style={{width: "56.33px", height: "32px"}} 
          alt='company-logo'
        />
      </div>

      <div className="nav-links desktop-only">
        <a href="#">{texts.nav_home || 'Home'}</a>
        <a href="#">{texts.nav_order || 'Order'}</a>
        <a href="#">{texts.nav_customers || 'Our Customers'}</a>
        <a href="#">{texts.nav_about || 'About us'}</a>
        <a href="#">{texts.nav_contact || 'Contact Us'}</a>

        <div className="nav-right">
            <div 
            className="lang-selector" 
            onClick={() => onChangeLang(currentLang === 'sv' ? 'en' : 'sv')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
                <span style={{color: "white", fontSize: '17px', fontWeight: "500"}} className="lang-text">{currentLang === 'sv' ? 'Svenska' : 'English'}</span>
                <img 
                    src={currentLang === 'sv' 
                    ? "https://storage.123fakturera.se/public/flags/SE.png" 
                    : "https://storage.123fakturera.se/public/flags/GB.png"} 
                    style={{width: "26px", height: "18px"}} 
                    alt="flag" 
                />
            </div>
        </div>
      </div>

        <div className="nav-right-mobile">
            <div 
            className="lang-selector" 
            onClick={() => onChangeLang(currentLang === 'sv' ? 'en' : 'sv')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
                <span style={{color: "white", fontSize: '17px', fontWeight: "500"}} className="lang-text">{currentLang === 'sv' ? 'Svenska' : 'English'}</span>
                <img 
                    src={currentLang === 'sv' 
                    ? "https://storage.123fakturera.se/public/flags/SE.png" 
                    : "https://storage.123fakturera.se/public/flags/GB.png"} 
                    style={{width: "26px", height: "18px"}} 
                    alt="flag" 
                />
            </div>
        </div>

      {isMenuOpen && (
        <div className="mobile-dropdown">
          <a href="#" onClick={() => setIsMenuOpen(false)}>{texts.nav_home || 'Home'}</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>{texts.nav_order || 'Order'}</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>{texts.nav_customers || 'Our Customers'}</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>{texts.nav_about || 'About us'}</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>{texts.nav_contact || 'Contact Us'}</a>
        </div>
      )}
    </div>
  );   
};

export default NavBar;