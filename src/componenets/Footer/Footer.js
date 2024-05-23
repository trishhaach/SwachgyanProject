import React from 'react';
import './Footer.css'; 
import logo1 from '../../assests/kmcLogo.jpg';
import logo2 from '../../assests/aviyantaLogo.png';
import logo3 from '../../assests/techLeadHersLogo.png';
import socialMedia1 from '../../assests/Instagram.png';
import socialMedia2 from '../../assests/GmailLogo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logos">
          <img src={logo1} alt="Logo 1" />
          <img src={logo2} alt="Logo 2" />
          <img src={logo3} alt="Logo 3" />
        </div>
        <div className="footer-center">
          <a href="https://www.yourwebsite.com" className="footer-website">Contact Us</a>
        </div>
        <div className="footer-social-media">
          <a href="https://www.instagram.com/tech_leadhers/" target="_blank" rel="noopener noreferrer">
            <img src={socialMedia1} alt="Instagram" />
          </a>
          <a href="mailto:swachgyaan@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={socialMedia2} alt="Gmail" />
          </a>
          {/* <a href="https://www.socialmedia3.com" target="_blank" rel="noopener noreferrer">
            <img src={socialMedia3} alt="Social Media 3" />
          </a>
          <a href="https://www.socialmedia4.com" target="_blank" rel="noopener noreferrer">
            <img src={socialMedia4} alt="Social Media 4" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
