import React from 'react'
import { Redirect } from 'react-router-dom'

import { getRoles } from '../utils/auth'

function Authorized(props){
    const { children, auth } = props
    let roles = getRoles()
    return(
        roles.includes(auth)?
        children
        :<Redirect to='/403'/>
    )
}

export default Authorized
