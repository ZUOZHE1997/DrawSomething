import './index.css'
import React from 'react'
import { Input,message } from 'antd'
import { connect, send } from '../../api/index'
export class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      canLogin: false,
    }
  }
  componentDidMount() {
    connect((result) => {
      if(!result) message.err("昵称重复")
      // else     // this.props.history.push('home')

    })
  }
  link(e) {
    // console.log(e.target.value)
    send(e.target.value)
    // this.props.history.push('home')
  }
  render() {
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
