import React, { useState, useEffect } from 'react'
import Control from './Control'

export default function InformationAssociation(props) {
    const [ contact, setContact ] = useState(null)

    useEffect(() => {
        if(props.formulaire.id){
            setContact(JSON.parse(props.formulaire.contact))
        }
    },[])

    const pushContact = (e) =>{
        const { name, value } = e.target;
        let tab = contact
        tab = { ...tab.contact, [name]:value}
        setContact(tab)
    }

    return (
        <div className='col-12'>
            <div className='row justify-content-between col-12 m-0' >
                <div className='form__group field col-5 mt-4'>
                    {console.log(props.formulaire)}
                    <input className='form__field' type='text' placeholder="Nom de l'association" name='lien' onChange={props.handleChange} value={props.formulaire.lien}/>
                    <label className='form__label'>Nom de l'association</label>
                </div>
                <div className='form__group field col-5 mt-4'>
                    <input className='form__field' type='text' placeholder="Email" name='email' onChange={props.handleChange} value={props.formulaire.email}/>
                    <label className='form__label'>Email</label>
                </div>
                <div className='form__group field col-5 mt-4'>
                    <input className='form__field' type='text' placeholder="Addresse siège social" name='addresse' onChange={props.formulaire.id ? pushContact : props.pushContact} value={contact && contact.addresse}/>
                    <label className='form__label'>Addresse siège social</label>
                </div>
                <div className='form__group field col-5 mt-4'>
                    <input className='form__field' type='text' placeholder="Tel" name='tel' onChange={props.formulaire.id ? pushContact :  props.pushContact} value={contact && contact.tel}/>
                    <label className='form__label'>Tel</label>
                </div>
                <div className='form__group field col-5 mt-4'>
                    <label className='form__label'>Champ d'intervention</label>
                    <select className='form__field' onChange={props.handleChange} name='theme' value={props.formulaire.theme}>
                        <option value="environnement">Environnement</option>
                        <option value="culturel">Culturel</option>
                        <option value="sportive">Sportive</option>
                        <option value='solidaire'>Solidaire</option>
                    </select>
                </div>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control} page={props.page} setPage={props.setPage} submit={props.submit} />
            </div>
        </div>
    )
}
