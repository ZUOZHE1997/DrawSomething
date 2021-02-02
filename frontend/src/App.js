import './App.css'
import React from "react";
import {LayoutContent} from "./views/Home"
import {Login} from "./views/login"
import {HashRouter, Switch, Route } from "react-router-dom";

// import {io, socket} from './api'

// console.log(socket)
// socket.on('connect', () => {
//     socket.on('send', (data) => {
//         console.log(data)
//     })
//     console.log(socket.id) // 'G5p5...'
// })

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogin: true// 初始值应该是false
        }
    }

    render() {
        return (
            <HashRouter >
                <Switch>
                    <Route path="/" component={Login}/>
                    <Route path="/home" component={LayoutContent}/>
                </Switch>
            </HashRouter>
            // <div>
            //     {this.state.isLogin ? <LayoutContent/> : <Login confirmLogin={() => {
            //         this.setState({isLogin: true})
            //     }}/>}
            // </div>
        )
    }
}

export default App
