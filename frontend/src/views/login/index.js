import './index.css'
import React from 'react'
import { Input, message } from 'antd'
import { connect, send } from '../../api/index'
import { store } from '../../store'
export class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      canLogin: false,
    }
  }

  componentDidMount() {
    connect()
  }
  link(e) {
    send(e.target.value)
  }
  render() {
    // const data = store.getState()

    store.subscribe(() => {
      if (store.getState().name !== '') {
        this.props.history.push('home')
      }
      console.log(store.getState().name)
      // console.log(data)
    })
    return (
      <div className="login-content">
        <div className="login-input-content">
          <p className="login-title">What's your nickname?</p>
          <Input
            maxLength="8"
            onPressEnter={(e) => {
              this.link(e)
            }}
            className="login-input"
            placeholder="your name"
            bordered={false}
          />
        </div>
      </div>
    )
  }
}
