import React, { useState, useEffect } from 'react';
import Navigation from './sidemenu/Navigation';
import SkeletonElement from '../skeleton/SkeletonElement';
import SkeletonVideo from '../skeleton/skeletonVideo';
import Formulaire from './formulaireAjoutVideo/Formulaire'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import Video from '../contenu/Video';
const localhost = require('../config.json');

export default function VideoAdmin() {
    const [ video, setVideo ] = useState(null)
    const [ scroll, setScroll ] = useState(false)
    const [ show, setShow ] = useState(false)
    const [ formulaire, setFormulaire ] = useState({"titre":'', "auteur":'',"url":''})
    const [ charge, setCharge ] = useState(false)
    const changelog = () => {
        if(window.scrollY > 0)
            setScroll(true);
        else
            setScroll(false);
    }

    window.addEventListener('scroll', changelog);
    
    useEffect(() => {
        render()
    },[])
    const render = () =>{
        fetch(`http://${localhost.localhost}/api/videos`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setVideo(data.video))
        setShow(false)
        setFormulaire({"titre":'', "auteur":'',"url":''})
    }

    const deleteVideo = (name) => {
        fetch(`http://${ localhost.localhost }/api/video/delete/${name}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))

        render()
    }

    const pushVideo = (data) =>{
        let tab = video ? video : []
        tab.splice(0, 0, data)
        setFormulaire([!formulaire, {"titre":'', "auteur":'',"url":''}])
        setVideo(tab);
    }

    const afficherFormulaire = (item) =>{
        setFormulaire(item)
        setShow(true)
    }

    const cacherFormulaire = () => {
        setFormulaire({"titre":'', "auteur":'',"url":''})
        setShow(false)
    }

    return (
        <div className='col-12 row p-0 m-0'>
            <div style={{position:'fixed', minHeight:'695px', marginTop:`${scroll ?'65px': '0px'}`,zIndex:'1000'}}>
                <Navigation/>
            </div>
            <div className='col-12 row justify-content-around'>
                <div className='col-11 mt-4 row ml-auto'>
                    {video && video.map(item => 
                        <div key={item.id} className='col-10 col-sm-7 col-md-6 col-lg-3'>
                            <div className='edition-video ml-auto mr-auto col-12 p-0 row justify-content-between align-items-center' style={{background:`rgb(46, 43, 43)`, color:'white', height:'30px', width: '100%'}}>
                                <div className='col-2'>
                                    <FontAwesomeIcon icon={faEdit} onClick={() => afficherFormulaire(item)}/>
                                </div>
                                <div className='col-2'>
                                    <FontAwesomeIcon icon={faTimes} onClick={() => deleteVideo(item.titre)}/>
                                </div>
                            </div>
                            <Video item={item} />
                        </div>
                    )}
                </div>
                <div className='col-12 text-right'>
                    <button onClick={() => afficherFormulaire(formulaire)}>Ajouter</button>
                </div>
                <div className='row p-0 m-0' onClick={() => cacherFormulaire()} style={{position: 'absolute', height:'100%', width:'100%', backgroundColor:'rgba(0,0,0, 0.5)',minHeight:'695px'}} hidden={!show}></div>
                <div className='col-10 col-sm-8 col-md-6 col-lg-4 p-0' style={{ marginBottom:'auto', marginTop:'5%', position:'absolute', zIndex:'2001'}} hidden={!show}>
                    <div className='col-4 ml-auto mr-auto pb-4 p-0' style={{backgroundColor:'white', minWidth:'100%', borderRadius:'10px'}}>
                        <div className='col-12 pt-3 pb-3 text-center' style={{backgroundColor:'rgb(66, 158, 255)', color:'white', borderRadius:'10px 10px 0px 0px', boxShadow:'0px 0px 12px gray'}}>
                            <h2 style={{fontWeight:'700'}}><FontAwesomeIcon icon={faVideo} style={{fontSize:'30px'}}/> Vidéo</h2>
                        </div>
                        <Formulaire render={render} setFormulaire={setFormulaire} formulaire={formulaire} pushVideo={pushVideo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}