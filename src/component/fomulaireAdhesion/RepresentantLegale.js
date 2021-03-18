import React, { useState } from 'react'
import ScrollToTop from '../ScrollToTop';
import regexEmail from './Regex';

export default function RepresentantLegale(props) {
    const [ message, setMessage ] = useState('');
    const [ email, setEmail ] = useState('');

    const verify = () =>{
        let tab = [props.value.civilite, props.value.nom, props.value.prenom, props.value.qualite, props.value.adresse, props.value.telephoneAmb, props.value.email];
        let valid = true;
        for(let value of tab){
            valid=(value === null || value === '' ? false : valid );
        }
        
        let emailValid = regexEmail.test(tab[6]);

        setEmail( !emailValid ? 'Email invalide' : '');
        setMessage( !valid ? 'Tout les champs doit être rempli' : '');

        if(valid && emailValid){
            props.next();
        }
    }

    const style = {
        color: 'red', 
        fontSize:'0.8em'
    }

    return (
        <div>
            <ScrollToTop/>
            <div className='bloc row col-lg-8 ml-auto mr-auto justify-content-between mb-4'>
                <div className='ml-auto mr-auto col-lg-8'><p className='text-center' style={{...style}}>{message}</p></div>
                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <select className="form__field" id="exampleFormControlSelect1" onChange={(e) => props.setter.setCivilite(e.target.value)} value={props.value.civilite}>
                            <option value='M.'>M.</option>
                            <option value='Mme'>Mme</option>
                        </select>
                        <label htmlFor="adresse" className="form__label">Civilité *</label>
                    </div>
                </div>
                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="nom" name="nom" id='nom' onChange={(e) => props.setter.setNom(e.target.value)} value={props.value.nom} required />
                        <label htmlFor="nom"className="form__label">Nom *</label>
                    </div>
                </div>
                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Prénom" name="prenom" id='prenom' onChange={(e) => props.setter.setPrenom(e.target.value)}  value={props.value.prenom} required />
                        <label htmlFor="prenom" className="form__label">Prénom *</label>
                    </div>
                </div>
                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field">
                        <select className="form__field" id="exampleFormControlSelect1" onChange={(e) => props.setter.setQualite(e.target.value)} value={props.value.qualite}>
                            <option value={props.value.civilite === 'M.' ? 'Président': 'Présidente'}>{props.value.civilite === 'M.' ? 'Président': 'Présidente'}</option>
                            <option value={props.value.civilite === 'M.' ? 'Trésorier': 'Trésorière'}>{props.value.civilite === 'M.' ? 'Trésorier': 'Trésorière'}</option>
                            <option value='Secrétaire'>Secrétaire</option>
                            <option value={`Membre/${props.value.civilite === 'M.'? 'Administrateur':'Administratrice'}`}>Membre/{props.value.civilite === 'M.'? 'Administrateur':'Administratrice'}</option>
                        </select>
                        <label className="form__label" htmlFor="exampleFormControlSelect1">Qualité *</label>
                    </div>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Adresse" name="adresse" id='adresse' onChange={(e) => props.setter.setAdresse(e.target.value)} value={props.value.adresse} required />
                        <label htmlFor="adresse" className="form__label">Adresse *</label>
                    </div>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Téléphone de l'ambassadeur" name="Telephone-de-l-ambassadeur" id="Telephone-de-l-ambassadeur" onChange={(e) => props.setter.setTelephoneAmb(e.target.value)} value={props.value.telephoneAmb} required />
                        <label htmlFor="Telephone-de-l-ambassadeur" className="form__label">Téléphone *</label>
                    </div>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Email de l'ambassadeur" name="Email" id='Email' onChange={(e) => props.setter.setEmail(e.target.value)} value={props.value.email}required />
                        <label htmlFor="Email" className="form__label">Email *</label>
                    </div>
                    <p style={{...style}}>{email}</p>
                </div>
            </div>
            <div className='col-lg-10 row justify-content-end'>
                <button onClick={ verify }>Suivant</button>
            </div>
        </div>
    )
}