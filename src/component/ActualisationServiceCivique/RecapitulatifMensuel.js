import React from 'react'
import './service-civique.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

export default function RecapitulatifMensuel() {
    return (
        <div className='recapmensuel col-12'>
            <div className='pt-4 mt-4 col-lg-8 ml-auto mr-auto'>
                <div className='col-lg-12 row'>
                    <div className='col-lg-6'>
                        <Link to='/service-civique/mes-bilans'><FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
                    </div>
                    <div className='col-lg-6 mt-4 mb-4'>
                        <h2 className=' text-right'>Récapitulatif Mensuel</h2>
                    </div>
                    <div className='col-lg-12 mb-4'>
                        <p>A remplir obligatoirement*</p>
                    </div>
                    <div className='col-12 mb-4'>
                        <p><strong>Mission à réalisées:</strong> (afficher ici selon les données de la semaine)</p>
                    </div>
                    <div className='col-12 mb-4'>
                        <div className='row col-lg-6 justify-content-between'>
                            <p><strong>Objectif atteint*:</strong></p>
                            <div>
                                <input type='radio' name='objectifatteint' value='oui'></input>
                                <label>oui</label>
                            </div>
                            <div>
                                <input type='radio' name='objectifatteint' value='Partiellement'></input>
                                <label>Partiellement</label>
                            </div>
                            <div>
                                <input type='radio' name='objectifatteint' value='non'></input>
                                <label>Non</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4'>
                        <p><strong>Observation du tuteur:</strong> (Afficher ici selon les informations entrer par le tuteur)</p>
                    </div>
                    <div className='col-lg-5'>
                        <p><strong>Compétence acquise:</strong></p>
                        <div className='row col-12 justify-content-between mb-4'>
                            <label><strong>Savoir-être* :</strong></label>
                            <textarea className='form-control' rows='4' cols='30'></textarea>
                        </div>
                        <div className='row col-12 justify-content-between mb-4'>
                            <label><strong>Savoir-faire* :</strong></label>
                            <textarea className='form-control' rows='4' cols='30'></textarea>
                        </div>
                        <div className='row col-12 justify-content-between mb-4'>
                            <label><strong>Savoir* :</strong></label>
                            <textarea className='form-control' rows='4' cols='30'></textarea>
                        </div>
                    </div>
                    <div className='row col-lg-6 justify-content-left mt-auto mb-auto'>
                        <div className='col-12 mb-4'>
                            <div>
                                <label><strong>Difficultés rencontrés* :</strong></label>
                            </div>
                            <div>
                                <textarea className='form-control' rows='4' cols='50'></textarea>
                            </div>
                        </div>
                        <div className='col-12 mb-4'>
                            <div>
                                <label><strong>Solutions apportés* :</strong></label>
                            </div>
                            <div>
                                <textarea className='form-control' rows='4' cols='50'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9'></div>
                    <div className='pb-4 col-3'>
                        <div className='text-center button'>
                            <a>Validé</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
