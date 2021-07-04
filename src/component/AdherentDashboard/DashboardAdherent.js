import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Presentation from './Presentation';
import Info from './Info';
import Modification from './Modification';
var localhost = require('../config.json');

export default function DashboardAdherent(props) {
    const [ contenu, setContenu ] = useState('Présentation');
    const [ email, setEmail ] = useState(props.match.params.email)
    const [ association, setAssociation ] = useState(null)

    const renderContenu = (contenu) => {
        switch(contenu){
            case 'modifier':
                return <Modification contenu={setContenu} setFormulaire={setAssociation} formulaire={association && association}/>;
            break;
            default:
                return <Presentation contenu={setContenu} setFormulaire={setAssociation} formulaire={association && association} />
        }
    }

    useEffect(() => {
        fetch(`http://${localhost.localhost}/api/page/${email}`,{
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setAssociation(data.pageFound))
    },[])
    return (
        <div className='vitrineAssociation col-12'>
            <div className='col-12 p-0 ml-auto mr-auto' style={{marginBottom:'-200px', zIndex:'1'}}>
            {association && <OwlCarousel
                    items='1'
                    autoplay={association && association.photo.length > 1 ? true : false}
                    loop
                    mouseDrag
                    rewind
                    dots={false}
                    margin={20}
                >   
                   {JSON.parse(association.photo).map(item =>
                        <div className='item'>
                            <div style={{backgroundImage: `url(http://${localhost.localhost}/association/images/${item})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'600px', width:'100%' }}></div>
                        </div>)}
                </OwlCarousel>}
            </div>
            <div className='col-lg-8 ml-auto mr-auto'>
                <div style={{backgroundColor:'white'}}>
                    {renderContenu(contenu)}
                </div>
            </div>
        </div>
    )
}
