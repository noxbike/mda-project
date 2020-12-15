import React, { useState } from 'react';
import CompositionBureau from './CompositionBureau';
import Confirmation from './Confirmation';
import DocumentAFournir from './DocumentAFournir';
import IdentificationAssociation from './IdentificationAssociation';
import RepresentantLegale from './RepresentantLegale';

export default function Main (props) {

    const [ nom, setNom ] = useState(null);
    const [ prenom, setPrenom ] = useState(null);
    const [ qualite, setQualite ] = useState('Président');
    const [ adresse, setAdresse ] = useState(null);
    const [ telephoneAmb, setTelephoneAmb ] = useState(null);
    const [ email, setEmail ] = useState(null);

    const [ nomAssociation, setNomAssociation ] = useState(null);
    const [ dateParutionAuJournalOfficiel, setDateParutionAuJournalOfficiel ] = useState(null);
    const [ sigle, setSigle ] = useState(null);
    const [ siret, setSiret ] = useState(null);
    const [ tel, setTel ] = useState(null);
    const [ emailAssociation, setEmailAssociation ] = useState(null);
    const [ dateCreation, setDateCreation ] = useState(null);
    const [ maldecRna, setMaldecRna ] = useState(null);
    const [ adresseSiegeSocial, setAdresseSiegeSocial ] = useState(null);
    const [ codeApe, setCodeApe ] = useState(null);
    const [ numAgrement, setNumAgrement ] = useState(null);
    const [ affiliation, setAffiliation ] = useState(null);
    const [ derniereAssembleeGenerale, setDerniereAssembleeGenerale ] = useState(null);
    
    const [ file, setFile ] = useState([]);
    const [ compositionBureau, setCompositionBureau ] = 
        useState([
            {id: 0, fonction: 'Président', NomPrenom: '', telephone: '', email: ''},
            {id: 1, fonction: 'Secrétaire', NomPrenom: '', telephone: '', email: ''},
            {id: 2, fonction: 'Trésorier', NomPrenom: '', telephone: '', email: ''}
        ]);

    const representant_legale = {nom, prenom, qualite, adresse, telephoneAmb, email}
    const identification_association = {nomAssociation, sigle, siret, tel, emailAssociation,
        dateCreation, maldecRna, adresseSiegeSocial, codeApe, numAgrement, affiliation, 
        derniereAssembleeGenerale, dateParutionAuJournalOfficiel }

    const setter ={ setFile, setNom, setPrenom, setQualite, setAdresse, setTelephoneAmb, setEmail,
    setNomAssociation, setSigle, setSiret, setTel, setEmailAssociation,
    setDateCreation, setMaldecRna, setAdresseSiegeSocial, setCodeApe, setNumAgrement, setAffiliation, setDerniereAssembleeGenerale, 
    setDateParutionAuJournalOfficiel, setCompositionBureau };
    
    const content = {
        'representant_legale': representant_legale,
        'identification_association': identification_association,
        'file': file,
        'composition_bureau': compositionBureau
    };
        
    switch (props.pageNow){
        case 2:
            return(
                <IdentificationAssociation value={ identification_association } setter={ setter } next={props.next} previous={props.previous}/>
            )
        case 3:
            return(
                <CompositionBureau value={ compositionBureau } setter={ setter } next={props.next} previous={props.previous}/>
            )
        case 4:
            return(
                <DocumentAFournir value={ file } setter={ setter } next={props.next} previous={props.previous}/>
            )
        case 5:
            return(
                <Confirmation value={ content } previous={props.previous}/>
            )
        default:
            return(
                <RepresentantLegale value={ representant_legale } setter={ setter } next={props.next}/>
            )
    }
}