import React, { useState } from 'react'
import { Drawer, Card } from '_antd@4.11.2@antd'
import { DrawContent } from '../Content'
import { MsgBoard } from '../MsgBoard'
import './index.css'
import { store } from '../../store'

export class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      setVisible: false,
      userNum: store.getState().userNum,
    }
  }

  render() {
    store.subscribe(() => {
      this.setState({
        userNum: store.getState().userNum,
      })
    })
    const showDrawer = () => {
      this.setState({
        visible: false,
      })
    }
    const onClose = () => {
      this.setState({
        visible: false,
      })
    }
    return (
      <div>
        <div className="people"> 当前在线人数 {this.state.userNum}人</div>
        <Card className="comment-card">
          <MsgBoard />
        </Card>
        <Drawer
          width="600"
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={this.state.visible}
        ></Drawer>
        <DrawContent showDrawer={showDrawer} />
      </div>
    )
  }
}
