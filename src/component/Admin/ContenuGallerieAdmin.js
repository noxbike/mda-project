import React, { useState, useCallback, useEffect } from "react";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
const localhost = require('../config.json');

export default function ContenuGallerieAdmin() {
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)
    const { name } = useParams()
    const [ gallerie, setGallerie ] = useState(null)
    const [ charge, setCharge ] = useState(false)

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const open = (index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(() => {
        render()
    }, [])

    const render = () => {
        fetch(`http://${localhost.localhost}/api/gallerie/${name}`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => renderJson(data.gallerieFound))
    }

    const renderJson = (data) => {
        let tab = [];
        let contenu = JSON.parse(data.contenu)
        for(let value of contenu){
           tab.push({"src": `http://${localhost.localhost}/gallerie/${value}`, "width": 4, "height": 3})
        }
        setGallerie(tab);
    }

    const uploadGallerie = (photo) => {
        let data = new FormData();
        data.append( 'file', photo )
        axios.post(`http://${localhost.localhost}/api/gallerie/upload` , data,{
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
        })
        .then(res => pushGallerie(res.data.file))
    }

    const pushGallerie = (input) => {
        
        axios.put(`http://${localhost.localhost}/api/gallerie/${name}/upload`, { "contenu": input },{
            method: "PUT",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(data => render())
    }

    const deletePhoto = (index) => {
        fetch(`http://${ localhost.localhost }/api/gallerie/${name}/delete/${index}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })

        let tab = gallerie;
        tab.splice(index,1);
        setGallerie(tab);
        setCharge(!charge);
    }

    return (
        <div id='contenu-gallerie' className='col-12'>
            {gallerie && 
                <div className='col-12 mt-4'>
                   {/*<Gallery photos={gallerie} onClick={openLightbox} />*/}
                   <div className='row p-0 col-12'>
                        {gallerie.map( (item, index) => 
                            <div key={index} className='col-12 col-lg-2 p-1 mb-4'>
                                <div className='ml-auto mr-auto' style={{maxWidth:'364px', cursor:'pointer'}}>
                                    <div className='edition-photo col-12 ml-auto mr-auto row justify-content-end align-items-center' style={{background:`rgb(46, 43, 43)`, color:'white', height:'30px', width: '100%'}}>
                                        <div className='col-1'>
                                            <FontAwesomeIcon icon={faTimes} onClick={() => deletePhoto(index)}/>
                                        </div>
                                    </div>
                                    <img onClick={() => open(index)} src={item.src} alt='im' width='100%' height='200px' />
                                </div>
                            </div>
                        )}
                    </div>
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
            <div className='text-right mt-4 col-lg-12'>
                <input type='file' onChange={(e) => uploadGallerie(e.target.files[0])} style={{width:'134.7px'}}/>
            </div>
        </div>
    )
}