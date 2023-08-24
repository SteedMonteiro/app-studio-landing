import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <h2>Comment Ça Marche</h2>
            <p>Explication détaillée: "Trois étapes simples: Planifiez, Développez, Lancez."</p>
            <img src="infographic.png" alt="Infographie du processus" />
            <p>Exemples et Études de cas: "Découvrez comment Sarah a lancé son application en 30 jours."</p>
        </div>
    );
}

export default HowItWorks;