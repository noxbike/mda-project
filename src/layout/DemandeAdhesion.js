import React, { useState } from 'react'
import "../style/declarationAssociation.css";
import "../style/input.scss";
import Main from '../component/fomulaireAdhesion/Main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

export default function DemandeAdhesion() {
    const [ page, setPage ] = useState(1);

    const previous = () => {
        if(page > 1){
            setPage(page - 1);
        }
    }

    const next = () => {
        if(page <= 4){
        setPage(page + 1);
        }
    }

    const step = [
        { id: 1, text: "Représentant légal" },
        { id: 2, text: "Identification de l'Association" },
        { id: 3, text: "Conseil d'Administration" },
        { id: 4, text: "Documents à fournir" }
    ];

    const conditionStepColor = (item) => {
        let style = {};
        if(page > item){
            style={
                backgroundColor:' rgb(0, 206, 0)', 
                color: 'white'
            }
        }
        else {
            style={
                border: '2px solid rgb(170, 170, 170',
                color: 'rgb(170, 170, 170'
            }
        }
        return style;
    }

    const conditionStepIcon = (item) => {
        if(page > item){
            return (<FontAwesomeIcon icon={ faCheck }/>)
        }
        else if ( page === item ){
            return( <FontAwesomeIcon icon={ faSyncAlt }/>)
        }

        else {
            return(item);
        }
    }

    return(
        <div className='Declaration-Associations container col-lg-12'>
            <h1 className='text-center mb-4'>Demande d'adhésion</h1>
            <div className='row ml-auto mr-auto col-lg-6 justify-content-around mb-4'>
                { step.map(item =>
                    <div key={ item.id } className='step'>
                        <div className='line'></div>
                        <div>
                            <p className='round' style={ conditionStepColor(item.id) }>{ conditionStepIcon(item.id) }</p>
                        </div>
                        
                    </div>
                )}
            </div>
            <div className='row textStep ml-auto mr-auto col-lg-6 justify-content-around mb-4'>
                {step.map(item => page === item.id ?
                    <h6 style={{ color: 'rgb(99, 99, 99)' }}key={ item.id }><strong>{ item.text }</strong></h6> :
                    <h6 className='hide-mobile' key={ item.id }>{ item.text }</h6>  
                )}
            </div>
            <div>
                <Main setPage={ setPage } pageNow={ page } next={next} previous={previous} />
            </div>
            <div className='col-lg-10 row justify-content-end'>
                {page === 1 ? null : <button onClick={ previous }>Précédent</button>}
                {page === 4 ? <button onClick={ next }>Confirmer</button> : <button onClick={ next }>Suivant</button>}
            </div>
        </div>
    )
}