import React, { Suspense } from 'react'
import { Spin, Icon } from 'antd'
import RootRouter from '../router/index'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const LazyLoading = () =>{ 
  return(
    <div style={{display:'flex',justifyContent:'center',
        alignItems:'center',width:'100%',height:'100%'}}>
      <Spin indicator={antIcon}/>
    </div>
  )
}

function PageContent(){
    return(
        <Suspense fallback={<LazyLoading/>}>
            <RootRouter/>
        </Suspense>
    )
}
export default PageContent