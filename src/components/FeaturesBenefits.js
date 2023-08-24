import React from 'react';
import '../styles/FeaturesBenefits.css';

const FeaturesBenefits = () => {
    return (
        <div className="featuresBenefits">
            <h2>Fonctionnalités et Avantages</h2>
            <div className="features">
                <div className="feature">
                    <i className="icon-speed"></i>
                    <h3>Développement rapide</h3>
                    <p>Notre plateforme vous permet de développer votre application rapidement et efficacement.</p>
                </div>
                <div className="feature">
                    <i className="icon-shield"></i>
                    <h3>Sécurité garantie</h3>
                    <p>Nous prenons la sécurité au sérieux. Votre application sera protégée contre les menaces.</p>
                </div>
                <div className="feature">
                    <i className="icon-database"></i>
                    <h3>Intégration de bases de données</h3>
                    <p>Intégrez facilement des bases de données à votre application pour stocker et gérer vos données.</p>
                </div>
            </div>
            <div className="videos">
                <h3>Vidéos Explicatives</h3>
                <video controls>
                    <source src="video1.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>
                <video controls>
                    <source src="video2.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>
            </div>
        </div>
    );
}

export default FeaturesBenefits;