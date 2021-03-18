import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './service-civique.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

export default function BilanNominatif() {
    const [ postSV, setPostSV ] = useState(null);
    const [projetPostSV, setProjetPostSV] = useState(["Emploi", "Formation", "Autres", "Orientation vers un ou d'autre(s) partenaire(s)"])
    return (
        <div className='bilanMiParcours col-12'>
            <div className='row pt-4 mt-4 col-lg-8 ml-auto mr-auto'>
                <div className='col-lg-6'>
                    <Link to='/service-civique/mes-bilans'><FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
                </div>
                <div className='col-lg-6 text-right'>
                    <h2>Bilan Nominatif</h2>
                </div>
                <div className='row col-lg-12 mb-4'>
                    <div className='col-lg-6'>
                        <p><strong>M./Mme nom prénom</strong></p>
                        <p><strong>Née le 01/01/2000</strong></p>
                    </div>
                    <div className='col-lg-6'>
                        <p><strong>Organisme</strong></p>
                        <p><strong>Mission</strong></p>
                        <p><strong>Intitulée de la mission</strong></p>
                    </div>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Votre impression générale (la misssion s'est-elle déroulée conformément à vos attentes ?) :</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Principales activités réalisées :</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Compétences acquises durant cette expérience :</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Points positifs :</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Photo de vos activités en service civique :</strong></p>
                    <input type='file' className='form-control-file'></input>
                </div>
                <div className='row col-lg-6 mb-4'>
                    <div className='col-12'>
                        <p><strong>Votre projet post service civique :</strong></p>
                    </div>
                    { postSV ? 
                    <div className='col-12 mb-4'>
                        <textarea className='form-control' cols='50' rows='4' placeholder='Précisez...'></textarea>
                    </div>:
                        projetPostSV.map(item =>
                            <div className='row col-6'>
                                <div className='col-2'>
                                    <input type='radio' name='postSV' onClick={() => setPostSV({item})}/>
                                </div>
                                <div className='col-9 pl-1 pr-0 m-0'>
                                    <label>{item}</label>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Axes d'amélioration :</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-9'></div>
                <div className='pb-4 col-3'>
                    <div className='text-center button'>
                        <a>Validé</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
