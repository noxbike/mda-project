import React, { useState, useCallback, useEffect } from "react";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import { useParams } from 'react-router-dom'
const localhost = require('../config.json');

export default function ContenuGallerie(props) {
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)
    const { name } = useParams()
    const [ gallerie, setGallerie ] = useState(null)

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(() => {
        fetch(`http://${localhost.localhost}/api/gallerie/${name}`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => renderJson(data.gallerieFound))
    }, [])

    const renderJson = (data) => {
        let tab = [];
        let contenu = JSON.parse(data.contenu)
        for(let value of contenu){
           tab.push({"src": `http://${localhost.localhost}/gallerie/${value}`, "width": 4, "height": 3})
        }
        setGallerie(tab);
    }

    return (
        <div className='col-12'>
            {gallerie && 
            <div className='col-12 mt-4'>
                <Gallery photos={gallerie} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                        currentIndex={currentImage}
                        views={gallerie.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        }
        </div>
    )
}
