import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Redirect404() {
    return (
        <Redirect to='/404'></Redirect>
    )
}
