import React, { useState } from 'react'
import TitreNPhoto from '../forms/TitreNPhoto'
import axios from 'axios'
import Control from '../forms/Control'
var localhost = require('../../config.json')

export default function FormulaireAjoutDossier(props) {
    const uploadPhoto = (photo) => {
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
        .then(res => props.setFormulaire(prevState => ({
            ...prevState,
            "photo": res.data.file
        })))
    }

    const submit = () => {
        axios.post(`http://${localhost.localhost}/api/gallerie/dossier/create`, { 'titre': props.formulaire.name, 'photo': props.formulaire.photo, 'contenu': `["${props.formulaire.photo}"]` },{
            method: "POST",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(res => props.pushGallerie(res.data))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setFormulaire(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const updateDossier = () => {
        axios.put(`http://${localhost.localhost}/api/gallerie/update`, props.formulaire,{
            method: "PUT",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(res => props.render())
    }

    return (
        <div className='col-12'>
            <div className='col-12 text-center'>
                <div className='col-5 ml-auto mr-auto form__group field'>
                    <input className='form__field' type='text' value={props.formulaire.name} name='name' onChange={handleChange}></input>
                    <label className='form__label' >Titre</label>
                </div>
                <h3 className='mt-4'>Photo:</h3>
                <div className='col-12 mb-4 row justify-content-around' style={{minHeight:'200px'}}>
                    {props.formulaire.photo && <img src={`http://${localhost.localhost}/gallerie/${props.formulaire.photo}`} alt='vuephoto' height='200px'/> }
                </div>
                <input type='file' onChange={(e) => uploadPhoto(e.target.files[0])}></input>
            </div>
            <div className='row justify-content-end col-12 mt-4'>
                <Control control={null} submit={props.formulaire.id ? updateDossier : submit}/>
            </div>
        </div>
    )
}
