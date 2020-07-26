import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Result403, Result404 } from '../components/Result'
import Authorized from '../components/Authorized'

const One = lazy(()=>import('../pages/one'))
const Two = lazy(()=>import('../pages/two'))
const GroupOne = lazy(()=>import('../pages/groupOne'))

function RootRouter(){
  return(
    <Switch>
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
