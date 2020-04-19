import React, { Suspense } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import RootRouter from '../router/index'
import { Redirect } from 'react-router-dom'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
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