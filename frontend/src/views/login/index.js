import './index.css'
import React from 'react'
import { Input } from 'antd'

export class Login extends React.Component {
  link() {
    console.log(123123)
    console.log(this.props)
    this.props.history.push('home')
  }
  render() {
    return (
      <div className="login-content">
        <div className="login-input-content">
          <p className="login-title">What's your nickname?</p>
          <Input
            maxLength="8"
            onPressEnter={() => {
              this.link()
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
