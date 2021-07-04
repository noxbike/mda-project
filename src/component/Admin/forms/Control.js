import React from 'react'

export default function Control(props) {
    switch(props.control){
        case 1:
            return(
                <div className='col-12 mt-4 text-right'>
                    <button onClick={() => props.setPage(props.page < 9 && props.page + 1)} style={{background:'rgb(66, 158, 255)', padding:'5px 15px 5px 15px', fontSize:'17px', color:'white', border:'none', outline:'none', fontWeight:'600'}}>Suivant</button>
                </div>
            )
        case 2:
            return(
            <div className='row justify-content-end col-12 mt-4'>
                <div>
                    <button onClick={() => props.setPage(props.page - 1)} style={{background:'none', border:'none', padding:'5px 15px 5px 15px', outline:'none', fontWeight:'600'}}>Précédent</button>
                </div>
                <div>
                    <button onClick={() => props.setPage(props.page + 1)} style={{background:'rgb(66, 158, 255)', padding:'5px 15px 5px 15px', fontSize:'17px', color:'white', border:'none', outline:'none', fontWeight:'600'}}>Suivant</button>
                </div>
            </div>
        )
        case 3:
            return(
                <div className='row justify-content-end col-12 mt-4'>
                    <div>
                        <button onClick={() => props.setPage(props.page - 1)} style={{background:'none', border:'none', padding:'5px 15px 5px 15px', outline:'none', fontWeight:'600'}}>Précédent</button>
                    </div>
                    <div>
                        <button onClick={() => props.submit()} style={{background:'rgb(66, 158, 255)', padding:'5px 15px 5px 15px', fontSize:'17px', color:'white', border:'none', outline:'none', fontWeight:'600'}}>Créer</button>
                    </div>
                </div>
            )
        default:
            return(
                <div>
                    <button onClick={() => props.submit()} style={{background:'rgb(66, 158, 255)', padding:'5px 15px 5px 15px', fontSize:'17px', color:'white', border:'none', outline:'none', fontWeight:'600'}}>Créer</button>
                </div>
            ) 
    }
}
