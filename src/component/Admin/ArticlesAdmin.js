import React, {useState, useEffect} from 'react';
import Navigation from './sidemenu/Navigation';
import Main from './formulaireAjoutArticle/Main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faNewspaper, faTimes } from '@fortawesome/free-solid-svg-icons';
import Actu from '../contenu/Actu';
const localhost = require('../config.json');

export default function ArticlesAdmin() {
    const [ article, setArticle ] = useState(null);
    const [ scroll, setScroll ] = useState(false)
    const [ formulaire, setFormulaire ] = useState({"titre":'', "photo":'', "contenu":'', "auteur":'MDA Saint-Benoît'})
    const [ show, setShow ] = useState(false)
    const [ page, setPage ] = useState(1)

    const changelog = () => {
        if(window.scrollY > 0)
            setScroll(true);
        else
            setScroll(false);
    }

    window.addEventListener('scroll', changelog);

    useEffect(() => {
        render()
    },[])

    const render = () => {
        fetch(`http://${ localhost.localhost }/api/articles`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setArticle(data.articleFound))
        setShow(false)
    }

    const deleteArticle = (titre) =>{
        fetch(`http://${ localhost.localhost }/api/article/delete/${titre}`,{
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))

        render()
    }

    const pushArticle = (data) => {
        let tab = article ? article : []
        tab.splice(0, 0, data)
        setShow(false)
        setArticle(tab);
    }

    const afficherFormulaire = (item) =>{
        setPage(1)
        setFormulaire(item)
        setShow(true)
    }

    const cacherFormulaire = () => {
        setPage(1)
        setFormulaire({"titre":'', "photo":'', "contenu":'', "auteur":'MDA Saint-Benoît'})
        setShow(false)
    }

    return (
        <div className='col-12 row p-0 m-0'>
            <div style={{position:'fixed', minHeight:'695px', marginTop:`${scroll ?'55px': '0px'}`,zIndex:'1000'}}>
                <Navigation/>
            </div>
            <div className='col-12 row p-0 justify-content-around'>
                <div className='row align-items-center col-11 ml-auto mt-4'>
                        {article && article.map(item =>
                            <div key={item.id} className='col-10 col-sm-7 col-md-6 col-lg-3'>
                                <div className='edition-article col-6 p-0 row justify-content-between align-items-center' style={{background:`rgb(46, 43, 43)`, color:'white', height:'30px', width: '100%'}}>
                                    <div className='col-2'>
                                        <FontAwesomeIcon icon={faEdit} onClick={() => afficherFormulaire(item)}/>
                                    </div>
                                    <div className='col-2'>
                                        <FontAwesomeIcon icon={faTimes} onClick={() => deleteArticle(item.titre)}/>
                                    </div>
                                </div>
                                <Actu key={item.id} item={item} />
                            </div>
                        )}
                </div>
                <div className='col-12 text-right'>
                    <button onClick={() => afficherFormulaire(formulaire)}>Ajouter</button>
                </div>
                <div onClick={() => cacherFormulaire(!show)} style={{position: 'absolute', height:'100%', width:'100%', backgroundColor:'rgba(0,0,0, 0.5)',minHeight:'695px',marginLeft:'27px'}} hidden={!show}>
                </div>
                <div className='col-10 col-lg-4' style={{ marginBottom:'auto', marginTop:'5%', position:'absolute'}} hidden={!show}>
                    <div className='col-4 ml-auto mr-auto pb-4 p-0' style={{backgroundColor:'white', minWidth:'100%', borderRadius:'10px',zIndex:'2001'}}>
                        <div className='col-12 pt-3 pb-3 text-center' style={{backgroundColor:'rgb(66, 158, 255)', color:'white', borderRadius:'10px 10px 0px 0px', boxShadow:'0px 0px 12px gray'}}>
                            <h2 style={{fontWeight:'700'}}><FontAwesomeIcon icon={faNewspaper} style={{fontSize:'30px'}}/> Ajouter un article</h2>
                        </div>
                        <Main render={render} page={page} setPage={setPage} setFormulaire={setFormulaire} formulaire={formulaire} pushArticle={pushArticle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

