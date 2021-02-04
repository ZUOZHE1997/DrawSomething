import React from 'react'
import './index.css'
import { Button, Input } from 'antd'
import { CommentGuide } from '../../components/comment/index'

export class MsgBoard extends React.Component {
  render() {
    const list = [
      {
        name: 'aloha',
        avatar: 'https://files.catbox.moe/i023bf.png',
        content: 'helloworld',
      },
      {
        name: 'tom',
        avatar: 'https://files.catbox.moe/i023bf.png',
        content: 'helloworldhelloworldhelloworldhelloworldhelloworldhelloworld',
      },
    ]
    return (
      <div className="message-board">
        <div className="message-board-show">
          {list.map((p) => {
            return <CommentGuide item={p} key={p.name}></CommentGuide>
          })}
        </div>
        <div>
          <Input placeholder="Basic usage" maxLength={20} />
          <Button type="primary" block style={{ marginTop: '10px' }}>
            提交
          </Button>
        </div>
      </div>
    )
  }
}
