import React from 'react'
import './service-civique.css'

export default function InscriptionSV() {
    return (
        <div className='inscriptionSV'>
            <div className='row col-lg-8 pt-4 mt-4 ml-auto mr-auto justify-content-around'>
                <div className='col-lg-12 mb-4'>
                    <h1 className='text-center'>Inscription Service civique</h1>
                </div>
                <div className='col-lg-5 ml-auto mr-auto'>
                    <h2 className='mb-4'>Volontaire :</h2>
                    <div className='row pb-4 justify-content-between'>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Prénom'></input>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Nom'></input>
                        </div>
                    </div>
                    <div className='row pb-4 justify-content-between'>
                        <div className='col-lg-6'>
                            <input type='password'  className='form-control mb-4' placeholder='Mot de passe'></input>
                        </div>
                        <div className='col-lg-6'>
                            <input type='password'  className='form-control mb-4' placeholder='Confirmé votre mot de passe'></input>
                        </div>
                    </div>
                    <div className='row pb-4 justify-content-between'>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Email'></input>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Téléphone'></input>
                        </div>
                    </div>
                    <div className='row pb-4'>
                        <textarea type='text' style={{width:'100%'}} rows='4'  className='form-control mb-4' placeholder='Intitulé de la mission'></textarea>
                    </div>
                </div>
                <div className='col-lg-5 ml-auto mr-auto'>
                    <div className='mb-4'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7csvPWMdfAHEAnhIRTdJKCK5SPK4cHfskow&usqp=CAU'  width='70%' alt='photo-profile' />
                    </div>
                    <div className='mb-4'>
                        <input type='file' className='form-control-file'></input>
                    </div>
                </div>
                <div className='col-lg-5 ml-auto mr-auto'>
                    <h2 className='mb-4'>Structure :</h2>
                    <div className='row pb-4 justify-content-between'>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Nom de la structure'></input>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Addresse de la structure'></input>
                        </div>
                    </div>
                    <div className='row pb-4 justify-content-between'>
                        <div className='col-lg-6'>
                            <input type='email'  className='form-control mb-4' placeholder='Email'></input>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Téléphone'></input>
                        </div>
                    </div>
                    <div className='row pb-4 justify-content-between'>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Responsable de la structure'></input>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Portable'></input>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 ml-auto mr-auto'>
                    <h2 className='mb-4'>Tuteur :</h2>
                    <div className='row pb-4 justify-content-between'>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Prénom'></input>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Nom'></input>
                        </div>
                    </div>
                    <div className='row pb-4 justify-content-between'>
                        <div className='col-lg-6'>
                            <input type='email'  className='form-control mb-4' placeholder='Email'></input>
                        </div>
                        <div className='col-lg-6'>
                            <input type='text'  className='form-control mb-4' placeholder='Téléphone'></input>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 ml-auto mr-auto'></div>
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
