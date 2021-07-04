import React, { useState } from 'react'
import InformationAssociation from '../Admin/forms/InformationAssociation'
import Logo from '../Admin/forms/Logo';
import Mission from '../Admin/forms/Mission';
import Photo from '../Admin/forms/Photo';
import QuiSommeNous from '../Admin/forms/QuiSommeNous';
import Representant from '../Admin/forms/Representant';
import Slogan from '../Admin/forms/Slogan';
import SocialNMap from '../Admin/forms/SocialNMap';

export default function Main(props) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setFormulaire(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangeManual = (name, value) => {
        props.setFormulaire(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

   

    const pushContact = (e) => {
        const { name, value } = e.target;
        let tab = props.formulaire
        tab.contact = { ...tab.contact, [name]:value}
        handleChangeManual('contact', tab.contact)
    }

    switch(props.show.what){
        case 'InformationPersonel':
            return ( <InformationAssociation handleChange={handleChange} pushContact={pushContact} formulaire={props.formulaire} /> )
        break;
        case 'Slogan':
            return(<Slogan handleChange={handleChange} formulaire={props.formulaire}/>)
        break;
        case 'Qui sommes-nous':
            return(<QuiSommeNous handleChange={handleChange} formulaire={props.formulaire}/>)
        break;
        case 'Photos':
            return(<Photo handleChange={handleChange} url={`association/images`} formulaire={props.formulaire}/>)
        break;
        case 'Logo':
            return(<Logo handleChange={handleChange} formulaire={props.formulaire}/>)
        break;
        case 'Mission':
            return(<Mission handleChange={handleChange} formulaire={props.formulaire}/>)
        break;
        case 'Représentant':
            return(<Representant handleChange={handleChange} formulaire={props.formulaire}/>)
        break;
        case 'Réseaux sociaux / localisation':
            return(<SocialNMap handleChange={handleChange} formulaire={props.formulaire}/>)
        break;
        default:
            return ( <div>default</div>)
    }
}
