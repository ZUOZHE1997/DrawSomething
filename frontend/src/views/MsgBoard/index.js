import React from 'react'
import './index.css'
import { Button, Input } from 'antd'
import { CommentGuide } from '../../components/comment/index'
const { TextArea } = Input

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
        content: 'helloworld',
      },
    ]
    return (
      <div className="message-board">
        <div className="message-board-show">
          {list.map((p) => {
            return <CommentGuide item={p} key={p.name}></CommentGuide>
          })}
        </div>
        <TextArea showCount={true} maxLength={40} autoSize={{ minRows: 4 }} />
        <Button type="primary" block>
          提交
        </Button>
      </div>
    )
  }
}
