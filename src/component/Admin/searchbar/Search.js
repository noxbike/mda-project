import React from 'react'

export default function Search(props) {
    return (
        <div className='row align-items-center col-12' style={{borderRadius: '5px 5px 0px 0px',height:'70px',  backgroundColor:'#CCCCCC'}}>
            <div className='col-3'>
                <input style={{width:'100%'}} type='text' placeholder='Maison des associations...'/>
            </div>
            <div className='col-2'>
                <select style={{width:'100%'}}>
                    <option>Tout</option>
                    <option>Environnement</option>
                    <option>Culturel</option>
                    <option>Sportive</option>
                    <option>Solidaire</option>
                </select>
            </div>
            <div className='col-1'>
                <button>
                    Rechercher
                </button>
            </div>
        </div>
    )
}
