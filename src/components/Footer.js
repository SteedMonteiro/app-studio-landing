import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__legal">
                <a href="/privacy-policy" className="footer__link">Politique de Confidentialité</a>
                <a href="/terms-of-service" className="footer__link">Mentions Légales</a>
            </div>
            <div className="footer__social">
                <a href="https://www.facebook.com/AppStudio" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/AppStudio" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/AppStudio" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;