import React from 'react'
import './service-civique.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
var localhost = require('../config.json');

export default function BilanIntegration() {
    return (
        <div className='bilanIntegration col-12'>
            <div className=' row pt-4 mt-4 col-lg-8 ml-auto mr-auto'>
                <div className='row col-12'>
                    <div className='col-lg-6'>
                        <Link to='/service-civique/mes-bilans'><FontAwesomeIcon icon={faLongArrowAltLeft} /></Link>
                    </div>
                    <div className='col-lg-6  text-right'>
                        <h2>Bilan d'intégration</h2>
                    </div>
                </div>
                <div className='col-12 mb-4'>
                    <p><strong>Mon premier jour:</strong> Cliquez sur l'émoticône correspondant*</p>
                    <div className='row col-lg-6 justify-content-around mb-4'>
                        <img src={`http://${ localhost.localhost }/emoticone/super.png`} width='60px' alt='content1'></img>
                        <img src={`http://${ localhost.localhost }/emoticone/bien.png`} width='60px' alt='content2'></img>
                        <img src={`http://${ localhost.localhost }/emoticone/so so.png`}  width='60px' alt='pas-content-1'></img>
                        <img src={`http://${ localhost.localhost }/emoticone/bad.png`} width='60px' alt='pas-content-2'></img>
                    </div>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Mes points de satisfaction et/ou d'inquiètude:</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>J'ai été autonome sur:</strong></p>
                    <textarea className='form-control' cols='50' rows='4'></textarea>
                </div>
                <div className='col-lg-6 mb-4'>
                    <p><strong>Mes objectifs:</strong></p>
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
