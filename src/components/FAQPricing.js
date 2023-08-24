import React from 'react';
import '../styles/FAQPricing.css';

const FAQPricing = () => {
    return (
        <div id="faqPricing">
            <section className="faq">
                <h2>FAQ</h2>
                <div className="faq-item">
                    <h3>Ai-je besoin de savoir coder ?</h3>
                    <p>Non, notre plateforme est conçue pour être utilisée par des personnes de tous niveaux de compétence technique.</p>
                </div>
                <div className="faq-item">
                    <h3>Puis-je intégrer des API externes ?</h3>
                    <p>Oui, notre plateforme permet l'intégration facile d'API externes.</p>
                </div>
            </section>
            <section className="pricing">
                <h2>Plans de Tarification</h2>
                <div className="pricing-item">
                    <h3>Basic</h3>
                    <p>Caractéristiques et coûts du plan Basic.</p>
                </div>
                <div className="pricing-item">
                    <h3>Premium</h3>
                    <p>Caractéristiques et coûts du plan Premium.</p>
                </div>
                <div className="pricing-item">
                    <h3>Enterprise</h3>
                    <p>Caractéristiques et coûts du plan Enterprise.</p>
                </div>
            </section>
        </div>
    );
}

export default FAQPricing;