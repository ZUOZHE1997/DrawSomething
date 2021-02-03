import './App.css'
import React from 'react'
import { LayoutContent } from './views/Home'
import { Login } from './views/login'
import { HashRouter, Switch, Route } from 'react-router-dom'

import { socket} from './api'

console.log(socket)
socket.on('connect', () => {
    socket.on('send', (data) => {
        console.log(data)
    })
    console.log(socket.id) // 'G5p5...'
})

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={LayoutContent} />
      </Switch>
    </HashRouter>
  )
}

export default App
