import React, { useState } from 'react'
import ScrollToTop from '../ScrollToTop';
import regexEmail from './Regex';

export default function IdentificationAssociation(props) {
    const [ message, setMessage ] = useState('');
    const [ email, setEmail ] = useState('');
    const verify = () => {
        const tab = [props.value.nomAssociation, props.value.sigle, props.value.adresseSiegeSocial, props.value.tel, props.value.emailAssociation, props.value.dateParutionAuJournalOfficiel, props.value.dateCreation, props.value.maldecRna, props.value.siret, props.value.numAgrement, props.value.affiliation, props.value.derniereAssembleeGenerale, props.value.codeApe]
        let valid = true;
        for(let i = 0; i < tab.length; i++){
            valid=(tab[i] === null || tab[i] === '' ? false : valid );
        }
        
        let emailValid = regexEmail.test(tab[4]);

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
            <div className='bloc row col-md-10 col-lg-12 col-xl-10 ml-auto mr-auto justify-content-between mb-4'>
                <div className='ml-auto mr-auto col-lg-8'><p className='text-center'style={{...style}}>{message}</p></div>
                
                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Nom" name="Nom" id='Nom' onChange={(e) => props.setter.setNomAssociation(e.target.value)} value={props.value.nomAssociation} required />
                        <label htmlFor="Nom" className="form__label">Nom de l'association</label>
                    </div>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Sigle" name="Sigle" id='Sigle' onChange={(e) => props.setter.setSigle(e.target.value)} value={props.value.sigle} required />
                        <label htmlFor="Sigle" className="form__label">Sigle</label>
                    </div>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Adresse du siège social" name="Adresse-du-siege-social" id='Adresse-du-siege-social' onChange={(e) => props.setter.setAdresseSiegeSocial(e.target.value)} value={props.value.adresseSiegeSocial} required />
                        <label htmlFor="Address-du-siege-social" className="form__label">Adresse du siège social</label>
                    </div>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Tel" name="Tel" id='Tel' onChange={(e) => props.setter.setTel(e.target.value)} value={props.value.tel} required />
                        <label htmlFor="Tel" className="form__label">Tel</label>
                    </div>
                </div>

                <div className='mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Email de l'ambassadeur" name="Email" id='Email' onChange={(e) => props.setter.setEmailAssociation(e.target.value)} value={props.value.emailAssociation} required />
                        <label htmlFor="Email" className="form__label">Email</label>
                    </div>
                    <p style={{...style}}>{email}</p>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="date" className="form__field" placeholder="Date de publication au journal officiel" name="Date-de-publication-au-journal-officiel" id='Date-de-publication-au-journal-officiel' onChange={(e) => props.setter.setDateParutionAuJournalOfficiel(e.target.value)} value={props.value.dateCreation} required />
                        <label htmlFor="Date-de-publication-au-journal-officiel" className="form__label">Date de publication au journal officiel</label>
                    </div>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="date" className="form__field" placeholder="Date de création" name="Date-de-creation" id='Date-de-creation' onChange={(e) => props.setter.setDateCreation(e.target.value)} value={props.value.dateCreation} required />
                        <label htmlFor="Date-de-creation" className="form__label">Date de création</label>
                    </div>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="MALDEC/RNA" name="Maldec/rna" id='Maldec/rna' onChange={(e) => props.setter.setMaldecRna(e.target.value)} value={props.value.maldecRna} required />
                        <label htmlFor="Maldec/rna" className="form__label">Numéro RNA</label>
                    </div>
                </div>

                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Siret" name="Siret" id='Siret' onChange={(e) => props.setter.setSiret(e.target.value)} value={props.value.siret} required />
                        <label htmlFor="Siret" className="form__label">Siret</label>
                    </div>
                </div>
                {
                    props.value.numAgrement === null ?
                    <div className=' mb-4 col-lg-5'>
                        <div className="form__group field">
                            <label htmlFor="numero-d-agrement" className="form__label">Avez-vous un agrément ?</label>
                            <div className='row justify-content-around pt-2'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="true" onChange={(e) => props.setter.setNumAgrement('Jeunesse Education Populaire (JEP)')} id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        oui
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label class="form-check-label" for="defaultCheck1">
                                        non
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div> :
                    props.value.numAgrement === 'Service Civique' || props.value.numAgrement === 'Jeunesse Education Populaire (JEP)' ?
                    <div className=' mb-4 col-lg-5'>
                        <div className="form__group field">
                            <select className="form__field" id="exampleFormControlSelect1" onChange={(e) => props.setter.setNumAgrement(e.target.value)} value={props.value.numAgrement}>
                                <option value='Jeunesse Education Populaire (JEP)'>Jeunesse Education Populaire(JEP)</option>
                                <option value='Service Civique'>Service Civique</option>
                                <option value=''>Autre</option>
                            </select>
                            <label className="form__label" htmlFor="exampleFormControlSelect1">Disposez-vous d'un agrément</label>
                        </div>
                    </div>:
                    <div className=' mb-4 col-lg-5'>
                        <div className="form__group field" >
                            <input type="input" className="form__field" placeholder="Autre-agrement" name="Autre-agrement" id='Autre-agrement' onChange={(e) => props.setter.setNumAgrement(e.target.value)} value={props.value.numAgrement} required />
                            <label htmlFor="Autre-agrement" className="form__label">Autre agrément</label>
                        </div>
                    </div>
                }
                
                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field" >
                        <input type="input" className="form__field" placeholder="Code Ape" name="code-ape" id='code-ape' onChange={(e) => props.setter.setCodeApe(e.target.value)} value={props.value.codeApe} required />
                        <label htmlFor="code-ape" className="form__label">Code Ape</label>
                    </div>
                </div>

                {
                    props.value.affiliation === null ?
                    <div className=' mb-4 col-lg-5'>
                        <div className="form__group field">
                            <label htmlFor="numero-d-agrement" className="form__label">êtes-vous adhérent à une autre structure ?</label>
                            <div className='row justify-content-around pt-2'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="true" onChange={(e) => props.setter.setAffiliation('')} id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        oui
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label class="form-check-label" for="defaultCheck1">
                                        non
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className=' mb-4 col-lg-5'>
                        <div className="form__group field" >
                            <input type="input" className="form__field" placeholder="Autre-agrement" name="Autre-agrement" id='Autre-agrement'value={props.value.affiliation} onChange={(e) => props.setter.setAffiliation(e.target.value)} required />
                            <label htmlFor="Autre-agrement" className="form__label">Nom de la structure</label>
                        </div>
                    </div>
                }
                
                <div className=' mb-4 col-lg-5'>
                    <div className="form__group field " >
                        <input type="date" className="form__field" placeholder="Date de la dernière Assemblée Générale" name="Date-de-la-derniere-assemblee-generale" id='Date-de-la-derniere-assemblee-generale' onChange={(e) => props.setter.setDerniereAssembleeGenerale(e.target.value)} value={props.value.derniereAssembleeGenerale} required />
                        <label htmlFor="Date-de-la-derniere-assemblee-generale" className="form__label">Date de la dernière Assemblée Générale</label>
                    </div>
                </div>
            </div>
            <div className='col-lg-10 row justify-content-end'>
                <button onClick={ () => props.previous() }>Précédent</button>
                <button onClick={ verify }>Suivant</button>
            </div>
        </div>
    )
}