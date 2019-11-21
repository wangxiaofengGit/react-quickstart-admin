import React, { Fragment, lazy } from 'react'
import { Route ,Switch,Redirect } from 'react-router-dom'
import { Result403, Result404} from '../components/Result'
import Authorized from '../components/Authorized'
const One = lazy(()=>import('../pages/one'))
const Two = lazy(()=>import('../pages/two'))
const Three = lazy(()=>import('../pages/three'))
const Four = lazy(()=>import('../pages/four'))
const Five = lazy(()=>import('../pages/five'))
const GroupOne = lazy(()=>import('../pages/groupOne'))
const GroupTwo = lazy(()=>import('../pages/groupTwo'))
const GroupThree = lazy(()=>import('../pages/groupThree'))
function RootRouter(){
    return(
      <Fragment>
        <Switch>
            <Route path='/one' exact component={One}/>
            <Route path='/one/next' component={Two}/>
            <Route path='/three' component={Three}/>
            <Route path='/four' render={()=>{
              return (<Authorized auth='editer'>
              <Four/>
            </Authorized>)
            }}/>
            <Route path='/five' render={()=>{
              return (<Authorized auth='admin'>
                <Five/>
              </Authorized>)
              }}/>
            <Route path='/groupone' component={GroupOne}/>
            <Route path='/grouptwo' component={GroupTwo}/>
            <Route path='/groupthree' component={GroupThree}/>
            <Route path='/403' component={Result403}/>
            <Route path='/*' component={Result404}/>
        </Switch>
      </Fragment>
    )
}
export default RootRouter