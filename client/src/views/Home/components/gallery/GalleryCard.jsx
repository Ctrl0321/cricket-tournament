import React from 'react';

export const GalleryCard = ({ image, name, link }) => {
    const handleCardClick = () => {
        window.open(link, '_blank');
    };

    return (
        <div className="gallery-card-container" onClick={handleCardClick}>
            <img src={`/images/${image}`} alt={name} />
            <div className="gallery-body-content-container">
                <h3>{name}</h3>
                <button>VIEW ALBUM</button>
            </div>
        </div>
    );
};
