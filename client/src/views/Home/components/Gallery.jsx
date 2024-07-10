import { Navigation } from "../../Navigation/Navigation";
import { GalleryCard } from "./gallery/GalleryCard";
import { useEffect, useState } from "react";

export const Gallery = () => {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const galleryResponse = await fetch('/gallery.json');
            const galleryData = await galleryResponse.json();
            setGalleryData(galleryData);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="gallery-header-component">
                <Navigation/>
            </div>
            <h1 className="gallery-header">SLPL 2024</h1>

            <div className="gallery-body-container">
                {galleryData.map((gallery, index) => (
                    <GalleryCard
                        key={index}
                        image={gallery.image}
                        name={gallery.name}
                        link={gallery.link}
                    />
                ))}
            </div>
        </>
    );
};
