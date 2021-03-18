import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Presentation from './Presentation';
import Info from './Info';

export default function Main() {
    const [ contenu, setContenu ] = useState('Présentation');

    const renderContenu = (contenu) => {
        switch(contenu){
            case 'Info':
                return <Info/>;
            break;
            default:
                return <Presentation/>
        }
    }
    return (
        <div className='vitrineAssociation col-12'>
            <div className='col-8 ml-auto mr-auto'>
                <div className='col-12 p-0 ml-auto mr-auto'>
                    <OwlCarousel
                        items='1'
                        autoplay
                        loop
                        mouseDrag
                        rewind
                        dots={false}
                        margin={20}
                    >
                        <div className='item'>
                            <img src='https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-blue-technology-background-material-materialtechnology-backgroundarrowcolor-backgroundbackground-image_67560.jpg' className="img-fluid mx-auto d-block mr-4" alt="img1"/>
                        </div>
                        <div className='item'>
                            <img src='https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-blue-technology-particle-banner-image_17143.jpg' className="img-fluid mx-auto d-block mr-4" alt="img2"/>
                        </div>
                    </OwlCarousel>
                </div>
                <div className='row col-12 ml-auto mr-auto pt-1 pb-1' style={{fontWeight:'600', display:'none'}}>
                    <div className='col-2'>
                        <p onClick={() => setContenu('présentation')}>Présentation</p>
                    </div>
                    <div className='col-2'>
                        <p onClick={() => setContenu('Info')}>Information</p>
                    </div>
                </div>
                {renderContenu(contenu)}
            </div>
        </div>
    )
}
