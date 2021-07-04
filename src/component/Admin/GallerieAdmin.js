import React, {useState , useEffect} from 'react';
import Navigation from './sidemenu/Navigation';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import FormulaireAjoutDossier from './AjoutGallerie/FormulaireAjoutDossier'
import DossierPhoto from '../contenu/DossierPhoto';
var localhost = require('../config.json')

export default function GallerieAdmin() {
    const [ scroll, setScroll ] = useState(false)
    const [ gallerie, setGallerie ] = useState(null)
    const [ formulaire, setFormulaire ] = useState({"name":'', "photo":''})
    const [ show, setShow ] = useState(false)
    const [ charge, setCharge ] = useState(false)
    
    const changelog = () => {
        if(window.scrollY > 0)
            setScroll(true);
        else
            setScroll(false);
    }

    useEffect(() => {
        render()
    },[])

    const render = () => {
        fetch(`http://${localhost.localhost}/api/gallerie`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setGallerie(data.gallerieFound))
        setShow(false)
    }

    window.addEventListener('scroll', changelog);

    const deleteDossier = (name) => {
        fetch(`http://${ localhost.localhost }/api/gallerie/dossier/delete/${name}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))

        let tab = gallerie;
        for(let value of tab){
            if(value.name === name){
                tab.splice(value,1);
            }
        }
        setGallerie(tab);
        setCharge(!charge);
    }
    
    const pushGallerie = (data) => {
        setShow(!show)
        let tab = gallerie ? gallerie : []
        tab.splice(0, 0, data)
        setCharge(!charge)
        setGallerie(tab);
    }

    const afficherFormulaire = (item) =>{
        setFormulaire(item)
        setShow(true)
    }

    const cacherFormulaire = () => {
        setFormulaire({"name":'', "photo":''})
        setShow(false)
    }

    return (
        <div className='row col-12 row p-0 m-0'>
            <div style={{position:'fixed', minHeight:'695px', marginTop:`${scroll ?'65px': '0px'}`,zIndex:'1000'}}>
                <Navigation/>
            </div>
            <div className='col-12 row justify-content-around'>
                <div className='row justify-content-around align-items-center col-12' style={{top:'0'}}>
                    <div className='row col-11 ml-auto mt-4'>
                        {gallerie && gallerie.map(item => 
                            <div key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                <div className='edition-video ml-auto mr-auto col-12 p-0 row justify-content-between align-items-center' style={{background:`rgb(46, 43, 43)`, color:'white', height:'30px', width: '100%'}}>
                                    <div className='col-2'>
                                        <FontAwesomeIcon icon={faEdit} onClick={() => afficherFormulaire(item)}/>
                                    </div>
                                    <div className='col-1'>
                                        <FontAwesomeIcon icon={faTimes} onClick={() => deleteDossier(item.name)}/>
                                    </div>
                                </div>
                                <DossierPhoto item={item} />
                            </div>
                        )}
                    </div>
                </div>
                <div className='col-12 text-right'>
                    <button onClick={() => afficherFormulaire(formulaire)}>Ajouter</button>
                </div>
                <div className='row p-0 m-0' onClick={() => cacherFormulaire()} style={{position: 'absolute', height:'100%', width:'100%', backgroundColor:'rgba(0,0,0, 0.5)',minHeight:'695px'}} hidden={!show}>
                </div>
                <div className='col-4 p-0' style={{ marginBottom:'auto', marginTop:'5%', position:'absolute'}} hidden={!show}>
                    <div className='col-4 ml-auto mr-auto pb-4 p-0' style={{backgroundColor:'white', minWidth:'100%', borderRadius:'10px'}}>
                        <div className='col-12 pt-3 pb-3 text-center' style={{backgroundColor:'rgb(66, 158, 255)', color:'white', borderRadius:'10px 10px 0px 0px', boxShadow:'0px 0px 12px gray'}}>
                            <h2 style={{fontWeight:'700'}}><FontAwesomeIcon icon={faImages} style={{fontSize:'30px'}}/> Ajouter un dossier d'image</h2>
                        </div>
                        <FormulaireAjoutDossier render={render} formulaire={formulaire} setFormulaire={setFormulaire} pushGallerie={pushGallerie}/>
                    </div>
                </div>
            </div>
        </div>
    )
}