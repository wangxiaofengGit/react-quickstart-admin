import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
function One(){
    return(
        <Link to='/one/next'><Button>到子页面</Button></Link>
    )
}
export default One