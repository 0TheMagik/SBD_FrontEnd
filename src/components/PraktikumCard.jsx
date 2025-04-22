import React from 'react';
import '../styles/PraktikumCard.css';

function PraktikumCard({ title, description, image }) {
return (
    <div className="praktikum-card">
        <div className="card-img">
            <img src={image} alt={title} />
        </div>
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <a href="#" className="card-button">Lihat Detail</a>
        </div>
        </div>
    );
}

export default PraktikumCard;