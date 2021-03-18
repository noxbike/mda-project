import React, { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';

export default function Uploader(props) {
    const [ file, setFile ] = useState(null)
    const [ error, setError ] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        setError(null)
        acceptedFiles.map( item =>{
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
                props.setAddedData({ "images": res.data.file });
            })
        })
    }, [])

    const { getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
        onDrop,
        /*accept: 'image/jpg'*/
    })

    return(
        <div id='dragndrop' className='mb-4'>
            <div id='dropzone' className='flex-column' { ...getRootProps() }>
                <input { ...getInputProps() } />
                <div>
                    { !isDragActive && (
                    <div className='text-center mb-4'>
                        <p>Glisser et déposer vos images ici</p>
                        <a className='btn-parcourir'>Choisir une Image</a>
                    </div> )}
                    { isDragActive && !isDragReject && ( <p className='text-center right'>Déposer votre image ici ...</p> )}
                    { isDragReject && ( <p className='text-center danger'>Le fichier doit être de type JPG</p> )}
                </div>
            </div>
        </div>
    )
}