import React from 'react';
import '../styles/MissionVision.css';

const MissionVision = () => {
    return (
        <div className="mission-vision-section">
            <div className="mission">
                <h2>Déclaration de Mission</h2>
                <p>Rendre le développement d'applications accessible à tous.</p>
            </div>
            <div className="vision">
                <h2>Déclaration de Vision</h2>
                <p>Être le choix numéro un pour les entrepreneurs du monde entier.</p>
            </div>
            <div className="customer-needs">
                <h2>Comment cela se relie aux besoins du client</h2>
                <p>Nous simplifions le développement d'applications, vous permettant de vous concentrer sur votre vision.</p>
            </div>
        </div>
    );
}

export default MissionVision;