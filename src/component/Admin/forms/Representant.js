import { faExclamationCircle, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Control from './Control'
import React, { useState, useEffect } from 'react'

export default function Representant(props) {
    const [ inputPersonne, setInputPersonne ] = useState(null)
    const [ inputFonction, setInputFonction ] = useState(null)
    const [ inputCivilite, setInputCivilite ] = useState('Mr.')
    const [ personne, setPersonne ] = useState(null)

    useEffect(()=>{
        if(props.formulaire){
            if(props.formulaire.id){
                setPersonne(JSON.parse(props.formulaire.personne))
            }
            else{
                setPersonne(props.formulaire.personne)
            }
        }
    },[])

    const AjoutPersonne = () => {
        if(props.formulaire.id){
                let tab = personne;
                tab.push({'civilite': inputCivilite, 'fonction': inputFonction, 'nomEtPrenom': inputPersonne});
                setPersonne(tab)
        }

        else{
            props.AjoutPersonne(inputCivilite, inputFonction, inputPersonne); 
        }
        setInputPersonne('')
        setInputFonction('')
        setInputCivilite('Mr.')
    }

    return (
        <div className='col-12'>
            <div className='col-12 p-0 mt-4'>
                <div className='col-12'>
                    <h5><strong>Les représentants</strong></h5>
                </div>
                <div className='col-12 p-0'>
                    <div className='row col-12 justify-content-around align-items-center' style={{minHeight:'200px'}}>
                        <ul>
                            {personne && personne.map(item => <div>{`${item.civilite} ${item.nomEtPrenom} ${item.fonction}`}</div>)} 
                        </ul>
                        {!props.formulaire.personne && <p className='text-center' style={{color:'gray', fontWeight:'550'}}><FontAwesomeIcon icon={faExclamationCircle}/> Aucun représentant</p>}
                    </div>
                    <form className='row col-12 justify-content-around'>
                        <div className='form__group field col-2 row align-items-end'>
                            <select className='form__field' onChange={(e) => setInputCivilite(e.target.value)} value={inputCivilite}>
                                <option>Mr.</option>
                                <option>Mdm</option>
                            </select>
                        </div>
                        <div className='form__group field col-4'>
                            <input className='form__field' placeholder='Nom et Prénom' type='text' onChange={(e) => setInputPersonne(e.target.value)} value={inputPersonne}/>
                            <label className='form__label' style={{paddingTop:'-20px'}}>Nom et Prénom</label>
                        </div>
                        <div className='form__group field col-4'>
                            <input className='form__field' placeholder='Fonction' type='text' onChange={(e) => setInputFonction(e.target.value)} value={inputFonction}/>
                            <label className='form__label'>Fonction</label>
                        </div>
                        <div className='row align-items-end col-1'>
                            <a type='submit' onClick={() => AjoutPersonne()}><span style={{fontSize:'1.3em', color:'gray'}}><FontAwesomeIcon icon={faUserPlus}/></span></a>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-12 text-right mt-4'>
                <Control control={props.control}  page={props.page} setPage={props.setPage} submit={props.submit} />
            </div>
        </div>
    )
}
