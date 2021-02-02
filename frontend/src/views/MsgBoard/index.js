import React from 'react'
import './index.css'
import { Button, Input } from 'antd'
import {CommentGuide} from '../../components/comment/index'
const { TextArea } = Input

export class MsgBoard extends React.Component {
  render() {
    const list = [
      {
        name: 'aloha',
        avatar:
          'https://avatars.githubusercontent.com/u/36844445?s=400&u=5d764d41119d96e18e0468bb5f22495db2d9882c&v=4',
        content: 'helloworld',
      },
      {
        name: 'tom',
        avatar:
          'https://avatars.githubusercontent.com/u/36844445?s=400&u=5d764d41119d96e18e0468bb5f22495db2d9882c&v=4',
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
