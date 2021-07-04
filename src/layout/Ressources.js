import React, { useState, useEffect} from 'react'

export default function Ressources() {
    const [ ressource, setRessource ] = useState(null)

    useEffect(()=>{
        fetch('./texte/ressource.json')
        .then(res => res.json())
        .then(data => setRessource(data))
    },[])

    return (
        <div className='pt-4 col-md-10 ml-auto mr-auto'>
            <h2 className='text-center'>Ressources</h2>
            <h5 className='pt-4'><strong>Liens Ressources</strong></h5>
            <hr style={{ border: '2px solid #932724' }}/>
            { ressource && ressource.map((item, index) => index === 0 ? 
                <div className='row ml-auto mr-auto col-12 mb-4' style={{ boxShadow: '1px 1px 25px rgba(0,0,0,.2)' }}>
                    <div className='col-12 col-md-4 mb-4 mt-4 ml-auto mr-auto row justify-content-center'>
                        <img src={item.logo} alt='logo-mda' width='276px' height='150px'/>
                    </div>
                    <div className='col-12 col-md-8 col-lg-8 mb-4 mt-4'>
                        <ul className='row col-12 m-0 p-0' style={{ listStyle: 'none' }}>
                            {item.fichier && item.fichier.map(name =>
                                <li className='col-12 col-md-12 col-lg-6'><a href={`http://mda-saintbenoit.re/ressources/${name}.pdf`} target='__blank'>&gt; {name} </a></li>
                            )}
                        </ul>
                    </div>
                </div> :
                <div className='pt-4 col-12 col-md-6 col-lg-4' style={{ boxShadow: '1px 1px 25px rgba(0,0,0,.2)' }}>
                    <div className='col-10 ml-auto mr-auto pb-4'>
                        <img src={item.logo} alt='logo' width='100%'/>
                    </div>
                    <ul className='pb-4' style={{ listStyle: 'none' }}>
                        {item.fichier && item.fichier.map(name =>
                            <li><a href={`http://mda-saintbenoit.re/ressources/${name}.pdf`} target='__blank'>&gt; {name}</a></li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}
