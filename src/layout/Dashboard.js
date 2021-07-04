import React, { useState }from 'react'
import { Redirect } from 'react-router';

export default function Dashboard(props) {
    const [ page, setPage ] = useState(props.user.status);

    switch(page){
        case 'ServiceCivique':
            return (<Redirect to='/service-civique/dashboard' />)

        case 'Adhérent':
            return (<Redirect to={`/adherent/${props.user.email}`} />)

        case 'Admin':
            return (<Redirect to={`/admin`} />)

        default:
            return (<Redirect to='/login' />)
    }
}
