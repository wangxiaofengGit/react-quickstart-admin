import React, { Suspense } from 'react'
import { Spin, Icon } from 'antd'
import RootRouter from '../router/index'
import { Redirect } from 'react-router-dom'

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const LazyLoading = () =>{ 
  return(
    <div style={{display:'flex',justifyContent:'center',
          width:'100%',height:'100%'}}>
      <Spin indicator={antIcon}/>
    </div>
  )
}

function PageContent(){
    return(
        <Suspense fallback={<LazyLoading/>}>
            <RootRouter/>
            {window.location.hash === '#/'&&<Redirect to='/one'/>}
        </Suspense>
    )
}
export default PageContent