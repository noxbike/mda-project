import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
var localhost = require('../config.json')

export default function BilanMiParcours() {
    return (
        <div className='bilanMiParcours col-12'>
            <div className='row pt-4 mt-4 col-lg-8 ml-auto mr-auto'>
                <div className='col-lg-6'>
                    <Link to='/service-civique/mes-bilans'><FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
                </div>
                <div className='col-lg-6 text-right'>
                    <h2>Bilan à mi-parcours</h2>
                </div>
                <div className='col-lg-12'>
                    <p><strong>Impression générale :</strong></p>
                    <div className='row col-lg-6 justify-content-around mb-4'>
                        <img src={`http://${ localhost.localhost }/emoticone/super.png`} width='60px' alt='content1'></img>
                        <img src={`http://${ localhost.localhost }/emoticone/bien.png`} width='60px' alt='content2'></img>
                        <img src={`http://${ localhost.localhost }/emoticone/so so.png`}  width='60px' alt='pas-content-1'></img>
                        <img src={`http://${ localhost.localhost }/emoticone/bad.png`} width='60px' alt='pas-content-2'></img>
                    </div>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Mes principales activités réalisées :</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Les activités que j'aimerai réalisées :</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-12'>
                    <p><strong>Mon degré de motivation :</strong></p>
                    <div className='row col-lg-6 justify-content-around mb-4'>
                        <img src={`http://${ localhost.localhost }/emoticone/super.png`} width='60px' alt='content1'></img>
                        <img src={`http://${ localhost.localhost }/emoticone/bien.png`} width='60px' alt='content2'></img>
                        <img src={`http://${ localhost.localhost }/emoticone/so so.png`}  width='60px' alt='pas-content-1'></img>
                        <img src={`http://${ localhost.localhost }/emoticone/bad.png`} width='60px' alt='pas-content-2'></img>
                    </div>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Le meilleur :</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Le pire :</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Niveau d'autonomie accordé :</strong></p>
                    <input type="range" id="autonomie" name="autonomie" min="0" max="100" step="1" style={{width:'60%'}}></input>
                    <div className='row col-lg-8 justify-content-between mb-4'>
                        <p><strong>Assisté</strong></p>
                        <p><strong>Autonome</strong></p>
                    </div>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Mes envies/projets avec le service civique :</strong></p>
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
