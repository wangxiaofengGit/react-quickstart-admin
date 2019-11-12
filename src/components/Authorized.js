import React from 'react'
import { getRoles } from '../utils/auth'
import { Redirect } from 'react-router-dom'
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