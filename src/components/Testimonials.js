import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>Témoignages</h2>
            <div className="testimonial">
                <p>"App.Studio a changé ma vie !" - Pierre, entrepreneur</p>
            </div>
            <div className="rating">
                <p>Évaluations: 4.7 étoiles sur 5, basé sur 200 avis.</p>
            </div>
        </div>
    );
}

export default Testimonials;