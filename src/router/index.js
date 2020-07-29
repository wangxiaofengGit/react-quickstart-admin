import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Result403, Result404 } from '../components/Result'
import Authorized from '../components/Authorized'

const One = lazy(()=>import('../pages/one'))
const Two = lazy(()=>import('../pages/two'))
const GroupOne = lazy(()=>import('../pages/groupOne'))
const Merchants = lazy(()=>import('../pages/Manage/Merchants'))
const Store = lazy(()=>import('../pages/Manage/Store'))
const Recharge = lazy(()=>import('../pages/Operate/Recharge'))
const Category = lazy(()=>import('../pages/Config/Category'))

function RootRouter(){
  return(
    <Switch>
      <Route path='/manage/merchants' component={Merchants}/>
      <Route path='/manage/store' component={Store}/>
      <Route path='/operate/recharge' component={Recharge}/>
      <Route path='/config/category' component={Category}/>
      <Route path='/one' exact component={One}/>
      <Route path='/one/next' render={()=>{
        return (<Authorized auth='admin'>
        <Two/>
      </Authorized>)
      }}/>
      <Route path='/groupone' component={GroupOne}/>
      <Route path='/403' component={Result403}/>
      <Route path='/*' component={Result404}/>
  </Switch>
  )
}

export default RootRouter
