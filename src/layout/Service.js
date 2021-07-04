import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PresentationSalle from '../component/PresentationSalle';
import Services from '../component/Services'
import '../style/services.css';
import parse from 'html-react-parser'

export default function Service() {
    const [ presentation, setPresentation ]  = useState(null)

    useEffect(() => {
        fetch(`./texte/nosServices.json`)
        .then(res => res.json())
        .then((data) => setPresentation(data))
    },[])

    return (
        <div id='services'>
            <div className='banniere mb-4'>
                <div className='caption text-center'>
                    {presentation && <h3>{parse(presentation.titreH3)}</h3>}
                </div>
            </div>
            <div className='col-lg-10 ml-auto mr-auto'>
                <div className='col-lg-12'>
                    {presentation && <h4 className='text-center'>{parse(presentation.titreH4)}</h4>}
                    {presentation && <p className='text-center mb-4'>{parse(presentation.headersParagraphe)}</p>}
                </div>
                <Services />
            </div>
            <div className='reservation pb-4 mb-4 mt-4 col-lg-12'>
                    <PresentationSalle />
                    <div className='text-center'>
                        {presentation && <h6 className='text-center'><strong>{parse(presentation.paragrapheReservation)}</strong></h6>}
                        <div className='mt-4' >
                            <Link to='/declaration-association' style={{ background:'#932724', color:'white', border:'none', height:'40px', width: '220px', fontWeight:'700', padding: '10px 15px 10px 15px', textDecoration:'none' }}>Demande d'adhésion</Link>
                        </div>
                    </div>
            </div>
            {presentation && <p className='text-center ml-auto mr-auto' style={{ width:'60%' }}>{parse(presentation.paragrapheFooter)}</p>}
        </div>
    )
}
