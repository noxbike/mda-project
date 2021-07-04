import { faEye, faEyeSlash, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Main from './formulaireAjoutPage/Main';
import Search from './searchbar/Search';
import Navigation from './sidemenu/Navigation';
import axios from 'axios'
const localhost = require('../config.json');

export default function AssociationAdmin() {
    const [ associationPage, setAssociationPage ] = useState(null);
    const [ page, setPage ] = useState(1)
    const [ formulaire, setFormulaire ] = useState({ 'lien': '', 'email': '', 'theme':'Environnement', 'mission':[], 'map':'', 'histoire': '', 'slogan': '', 'personne':[], 'photos':[], 'logo':'', "contact": {"addresse": '', "tel": ''}, "social": [{"link": '', "name": "site", "show": 1}, {"link": '', "name": "twitter", "show": 1}, {"link": '', "name": "facebook", "show": 1}, {"link": '', "name": "instagram", "show": 1}]  });
    const [ show, setShow ] = useState(false)
    const [ scroll, setScroll ] = useState(true)
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
    },[]);

    const render = () => {
        fetch(`http://${ localhost.localhost }/api/pages/list`,{
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {data.pageFound && setAssociationPage(data.pageFound)})
    }

    const afficher = (lien, show) => {

        axios.put(`http://${ localhost.localhost }/api/page/update/${lien}`, { "show": show },{
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

    const supprimer = (lien) => {
        fetch(`http://${ localhost.localhost }/api/page/delete/${lien}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))

        let tab = associationPage;
        for(let value of tab){
            if(value.lien === lien){
                tab.splice(value,1);
            }
        }
        setAssociationPage(tab);
        setCharge(!charge);
    }

    const pushPage = (data) => {
        let tab = associationPage ? associationPage : []
        tab.splice(0, 0, data)
        setFormulaire(false)
        setAssociationPage(tab);
    }

    const afficherFormulaire = (item) =>{
        setPage(1)
        setFormulaire(item)
        setShow(true)
    }

    const cacherFormulaire = () => {
        setPage(1)
        setFormulaire({ 'lien': '', 'email': '', 'theme':'Environnement', 'mission':[], 'map':'', 'histoire': '', 'slogan': '', 'personne':[], 'photos':[], 'logo':'', "contact": {"addresse": '', "tel": ''}, "social": [{"link": '', "name": "site", "show": 1}, {"link": '', "name": "twitter", "show": 1}, {"link": '', "name": "facebook", "show": 1}, {"link": '', "name": "instagram", "show": 1}]})
        setShow(false)
    }

    return (
        <div className='col-12 row p-0 m-0'>
            <div style={{position:'fixed', minHeight:'695px', marginTop:`${scroll ?'0px': '0px'}`,zIndex:'1000'}}>
                <Navigation/>
            </div>
            <div className='col-12 row m-0 justify-content-around'>
                <div className='row align-items-center col-11 ml-auto mt-4'>
                    <Search/>
                    {associationPage && associationPage.map((item, index) => 
                        <div key={ index } className='row col-12 p-0 justify-content-between align-items-center' style={{borderBottom:'1px solid gray', height:'50px', color:'black'}}>
                            <div className='col-6 col-lg-8'>
                                <h4 style={{fontWeight:'550'}}>{item.lien}</h4>
                            </div>
                            <div className='row justify-content-around col-6 col-lg-4'>
                                <div className='col-6' style={{cursor:'pointer'}}>
                                    <a onClick={() => afficher(item.lien, !item.show)}>{item.show ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}</a>
                                </div>
                                <div className='row justify-content-around col-6'>
                                    <Link to={`/association/${item.lien}`}>Voir</Link>
                                    <a onClick={() => supprimer(item.lien)}><FontAwesomeIcon icon={faTrash}/></a>
                                </div>
                            </div>
                        </div>
                    )}
                    {!associationPage && <h2 className='text-center'>Aucune association n'a été ajouté au site !</h2>}
                    <div className='mt-4 col-12 row justify-content-end'>
                        <button onClick={() => afficherFormulaire(formulaire)}>Ajouter</button>
                    </div>
                </div>
                <div className='row p-0 m-0' onClick={() => cacherFormulaire()} style={{position: 'absolute', height:'100%', width:'100%', backgroundColor:'rgba(0,0,0, 0.5)',minHeight:'695px'}} hidden={!show}>
                </div>
                <div className='col-4 p-0' style={{ marginBottom:'auto', marginTop:'5%', position:'absolute'}} hidden={!show}>
                    <div className='col-4 ml-auto mr-auto pb-4 p-0' style={{backgroundColor:'white', minWidth:'100%', borderRadius:'10px'}}>
                        <div className='col-12 pt-3 pb-3 text-center' style={{backgroundColor:'rgb(66, 158, 255)', color:'white', borderRadius:'10px 10px 0px 0px', boxShadow:'0px 0px 12px gray'}}>
                            <h2 style={{fontWeight:'700'}}><FontAwesomeIcon icon={faUserPlus} style={{fontSize:'30px'}}/> Page vitrine</h2>
                        </div>
                        <Main render={render} page={page} setPage={setPage} formulaire={formulaire} setFormulaire={setFormulaire} pushPage={pushPage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}