import React, { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import '../style/dropzone.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export default function Uploader(props) {
    const [ file, setFile ] = useState(true)
    const [ error, setError ] = useState(null);
    const affichagePdf = props.file;


    const wrapFileTitle = (filename) => {
        if(filename.length >= 20){
            let record ='';
            for(let i = 0; i < 8; i++){
                record += filename[i];
            }
            record = record + '...';
            for(let i = filename.length - 7; i < filename.length; i++){
                record += filename[i];
            }
            return record;
        }
        else{
            return filename;
        }
    }

    const onDrop = useCallback(acceptedFiles => {
        if(affichagePdf.length === props.limit){
            setError(<p className='warning'>Attention seulement {props.limit} fichiers sont autorisé</p>)
        }
        else{
            setError(null)
            if( acceptedFiles.length > props.limit ){
                setError(<p className='warning'>Attention seulement { props.limit } fichiers sont autorisé</p>)
            }
            else{
                acceptedFiles.map( item =>{
                    affichagePdf.push( item )
                    const config = {
                        onUploadProgress: function( progressEvent ) {
                            var percentCompleted = Math.round(( progressEvent.loaded * 100 ) / progressEvent.total)
                            item.load = percentCompleted;
                            setFile( percentCompleted );
                        }
                    }
                    let data = new FormData();
                    data.append( 'file', item )
                    axios.post( props.url , data, config, {
                    }).then(res => {
                        item.realname = res.data.file;
                        setFile( item.realname );
                    })
                })
            }
        }
        props.setfile( affichagePdf );
    }, [])

    const supression = (e) => {
        for( let i = 0; i < affichagePdf.length; i++ ){
            if( affichagePdf[i].realname === e ){
                affichagePdf.splice( i,1 );

                fetch( props.delete + e, {
                    method: 'DELETE'
                })
                .then( res => res.json())
                .then(data => setError( data.message ? '' : Error ))
            }
            setFile(!file);
        }
    }

    const { getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
        onDrop/*,
        accept: 'application/pdf'*/
    })

    const files = affichagePdf.map( file => (
        <li className='row file justify-content-around  mb-2' key={ file.realname }>
            <img src='https://linspirale.ch/images/images/PDF-Logo.png' alt='pdf'/>
            { file.realname ?
                ( <div className='row file-info align-items-center justify-content-between'>
                    <p>{ wrapFileTitle(file.path) }</p>
                    <FontAwesomeIcon  className='trash' style={{ zIndex:'1000' }} onClick={ () => supression( file.realname ) } icon={faTrashAlt} />
                  </div>) : 
                ( <div className='loading-file flex-column'>
                    <p>{ wrapFileTitle(file.path) }</p>
                    <div className='bar'>
                        <div className='progress' style={{ width:`${file.load}%` }}></div>
                    </div>
                </div> )
            }
        </li>
    ));

    return(
        <div id='dragndrop' className='mb-4'>
            {files.length > 0?
            <div> 
                <div className='label-file'>
                    <h6>Fichiers uploader</h6>
                </div>
                { error }
                <ul>{files}</ul>
            </div> : 
                ''
            }
            <div id='dropzone' className='flex-column' { ...getRootProps() }>
                <input { ...getInputProps() } />
                <div>
                    { !isDragActive && (
                    <div className='text-center mb-4'>
                        <p>Glisser et déposer vos fichier ici</p>
                        <a className='btn-parcourir'>Choisir un fichier</a>
                    </div> )}
                    { isDragActive && !isDragReject && ( <p className='text-center right'>Déposer votre fichier ici ...</p> )}
                    { isDragReject && ( <p className='text-center danger'>Le fichier doit être de type PDF</p> )}
                </div>
            </div>
        </div>
    )
}