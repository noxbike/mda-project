import { faEnvelope, faFax, faMapMarked, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import Partenaire from '../component/Partenaire';
import CarouselMultiple from '../component/CarouselMultiple';
import '../style/qui-somme-nous.css';
import { Link } from 'react-router-dom';
const icone = [faMapMarked, faEnvelope, faPhoneAlt, faFax]

export default function QuiSommeNous() {
    const [ quisommenous, setQuisommenous ] = useState(null)
    useEffect(() => {
        fetch(`./texte/qui-sommes-nous.json`)
        .then(res => res.json())
        .then((data) => setQuisommenous(data))
    },[])

    return (
        <div className='qui-somme-nous d-flex flex-column justify-content-around align-items-center'>
            <CarouselMultiple/>
            <div style={{ width: '100%', backgroundColor:'gray', fontWeight:'700', color: 'white', height:'25px' }} className='text-center'>
                <p>Nos partenaires</p>
            </div>
            <Partenaire />
            {
                quisommenous && quisommenous.map(item => 
                    <div className='mb-4' style={{ width:'80%' }}>
                        {item.titre && <h3>{item.titre}</h3>}
                        {item.paragraphe && <p>{item.paragraphe}</p>}
                        {item.paragrapheCenter && <p className='text-center'>{item.paragrapheCenter}</p>}
                        {item.paragraphes && item.paragraphes.map(param => <p>{param}</p>)}
                        {item.liste && <ul>{item.liste.map((param,index) => <li>{param}</li>)}</ul>}
                        {item.contact && item.contact.map((param,index) => <p><FontAwesomeIcon icon={ icone[index] }/> {param}</p>)}
                    </div>)
            }
            <div className='mb-4'>
                <Link to='/declaration-association' style={{ background:'#932724', color:'white', border:'none', height:'40px', width: '220px', fontWeight:'700', padding: '10px 15px 10px 15px', textDecoration:'none' }}>Devenir adhérent</Link>
            </div>
            <div className='map' style={{ width:'100%' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5265.882157535552!2d55.711690134045064!3d-21.051044781168166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8eefb43a2c077bb!2sMaison%20des%20Associations%20de%20Saint-Beno%C3%AEt!5e0!3m2!1sfr!2sfr!4v1604948840208!5m2!1sfr!2sfr" width="100%" height="300" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    )
}
