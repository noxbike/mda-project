import React, { useState, useCallback } from "react";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
const photos = require('./photo.json');

export default function Gallerie() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div className='col-12'>
            <h1 className='col-12 text-center pb-4'>Gallerie</h1>
            <div className='col-12'>
                <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                            />
                        </Modal>
                        ) : null}
                    </ModalGateway>
            </div>
        </div>
    )
}
