```javascript
import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/"><img src="public/logo192.png" alt="App.Studio Logo" /></a>
            </div>
            <div className="contact-info">
                <a href="tel:1234567890"><i className="phone-icon"></i></a>
                <a href="mailto:info@app.studio"><i className="email-icon"></i></a>
                <button className="live-chat">Chat en direct</button>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#hero">Héros</a></li>
                    <li><a href="#missionVision">Mission/Vision</a></li>
                    <li><a href="#howItWorks">Comment ça marche</a></li>
                    <li><a href="#featuresBenefits">Fonctionnalités et avantages</a></li>
                    <li><a href="#testimonials">Témoignages</a></li>
                    <li><a href="#faqPricing">FAQ et tarification</a></li>
                </ul>
                <button className="cta-signup">Inscrivez-vous maintenant</button>
            </nav>
        </header>
    );
}

export default Header;
```