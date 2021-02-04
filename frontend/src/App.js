import './App.css'
import React from 'react'
import { Home } from './views/Home'
import { Login } from './views/Login'
import { HashRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default App
