import React,{ Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './Layout/index'
import NormalLoginForm from './pages/Login/index'
import './App.less'
function App() { 
  return (
    <Fragment>
      <Switch>
        <Route path='/login' component={NormalLoginForm}/>
        <Route path='/' component={Layout}/>
      </Switch>
    </Fragment>
  )
}
export default App