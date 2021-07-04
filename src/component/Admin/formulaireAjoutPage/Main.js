import React, { useState } from 'react'
import axios from 'axios'
import InformationAssociation from '../forms/InformationAssociation'
import QuiSommeNous from '../forms/QuiSommeNous'
import Representant from '../forms/Representant'
import Mission from '../forms/Mission'
import Slogan from '../forms/Slogan'
import SocialNMap from '../forms/SocialNMap'
import Logo from '../forms/Logo'
import Photo from '../forms/Photo'
var localhost = require('../../config.json')

export default function Main(props) {
    const [ charge, setCharge ] = useState(false)
    const uploadLogo = (logo) => {
        let data = new FormData();
        data.append( 'file', logo )
        axios.post(`http://${localhost.localhost}/api/create/page/logo` , data,{
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
        })
        .then(res => props.setFormulaire(prevState => ({
            ...prevState,
            "logo": res.data.file
        })))
    }

    const AjoutMission = (newmission) => {
        let tab = props.formulaire;
        tab.mission.push(newmission);
        props.setFormulaire(tab);
    }

    const AjoutPersonne = (inputCivilite, inputFonction, inputPersonne) => {
        let tab = props.formulaire;
        tab.personne.push({'civilite': inputCivilite, 'fonction': inputFonction, 'nomEtPrenom': inputPersonne});
        props.setFormulaire(tab);
    }

    const uploadPhoto = (photo) => {
        let data = new FormData();
        data.append( 'file', photo )
        axios.post(`http://${localhost.localhost}/api/create/page/photo` , data,{
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
        })
        .then(res => pushPhoto(res.data.file))
    }

    const pushPhoto = (input) => {
        let tab = props.formulaire
        tab.photos.push(input)
        props.setFormulaire(tab)
        setCharge(!charge)
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setFormulaire(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const pushSocial = (e) => {
        const { name, value } = e.target;
        let tab = props.formulaire
        for(let res of tab.social){
            if(res.name === name){
                res.link = value;
            }
        }
        props.setFormulaire(tab)
    }

    const pushContact = (e) => {
        const { name, value } = e.target;
        let tab = props.formulaire
        tab.contact = { ...tab.contact, [name]:value}
        props.setFormulaire(tab)
    }

    const submit = () => {
        axios.post(`http://${localhost.localhost}/api/newpage`, props.formulaire,{
            method: "POST",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
    .then(res => props.pushPage(res.data))
    }

    const update = () => {
        console.log('update')
    }

    switch(props.page){
        case 2:
            return(<Representant control={2} page={props.page} setPage={props.setPage} formulaire={props.formulaire} AjoutPersonne={AjoutPersonne} />)
        case 3:
            return(<Mission control={2} page={props.page} setPage={props.setPage} formulaire={props.formulaire} AjoutMission={AjoutMission} />)
        case 4:
            return(<SocialNMap control={2} page={props.page} setPage={props.setPage} formulaire={props.formulaire} pushSocial={pushSocial} />)
        case 5:
            return(<QuiSommeNous control={2} page={props.page} setPage={props.setPage} formulaire={props.formulaire} handleChange={handleChange} />)
        case 6:
            return(<Slogan control={2} page={props.page} setPage={props.setPage} formulaire={props.formulaire} handleChange={handleChange} />)
        case 7:
            return(<Logo control={2} page={props.page} setPage={props.setPage} formulaire={props.formulaire} uploadLogo={uploadLogo} handleChange={handleChange} />)
        case 8:
            return(<Photo control={3} page={props.page} setPage={props.setPage} formulaire={props.formulaire} submit={props.formulaire.id ? update : submit} uploadPhoto={uploadPhoto} handleChange={handleChange} url={`association/images`} />)
        default:
            return(<InformationAssociation control={1} page={props.page} setPage={props.setPage} formulaire={props.formulaire} pushContact={pushContact} handleChange={handleChange} />)
    }
}