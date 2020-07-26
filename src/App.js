import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './Layout/index'
import NormalLoginForm from './pages/Login/index'

function App() { 
  return (
    <Switch>
      <Route path='/login' component={NormalLoginForm}/>
      <Route path='/' component={Layout}/>
    </Switch>
  )
}

export default App