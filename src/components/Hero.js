import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero-title">Transformez Votre Idée d'Application en Réalité</h1>
            <p className="hero-subtitle">Nous vous guidons à chaque étape du développement de votre application, du concept à la mise en marché.</p>
            <p className="hero-value-proposition">Une plateforme tout-en-un pour le développement, le test, et la promotion de votre application.</p>
            <button className="hero-cta">Commencez Maintenant</button>
        </div>
    );
}

export default Hero;