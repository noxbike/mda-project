import React, { useState } from 'react'
import Contenu from '../forms/Contenu'
import Photo from '../forms/Photo'
import TitreNDateNPlace from '../forms/TitreNDateNPlace'
import axios from 'axios'
var localhost = require('../../config.json')

export default function Main(props) {
    const uploadPhoto = (photo) => {
        let data = new FormData();
        data.append( 'file', photo )
        axios.post(`http://${localhost.localhost}/api/agenda/upload` , data,{
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
            "photo": `evenement/${res.data.file}`
        })))
    }

    const submit = () => {
        axios.post(`http://${localhost.localhost}/api/agenda/create`, props.formulaire,{
            method: "POST",
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
        .then(res => props.pushEvent(res.data))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setFormulaire(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangehour = (name, value) => {
        props.setFormulaire(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangeContenu = (e) => {
        props.setFormulaire(prevState => ({
            ...prevState,
            "contenu": e
        }))
    }

    const updateEvenement = () => {
        axios.put(`http://${localhost.localhost}/api/agenda/update`, props.formulaire,{
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

   switch (props.page){
        case 2:
            return(<Photo control={2} uploadPhoto={uploadPhoto} formulaire={props.formulaire} page={props.page} setPage={props.setPage}/>)
        case 3:
            return(<Contenu control={3} submit={props.formulaire.id ? updateEvenement : submit} handleChangeContenu={handleChangeContenu} formulaire={props.formulaire} page={props.page} setPage={props.setPage} />)
        default:
            return(<TitreNDateNPlace control={1} handleChangehour={handleChangehour} handleChange={handleChange} formulaire={props.formulaire} setPage={props.setPage} page={props.page} />)
   }
}