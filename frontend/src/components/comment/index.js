import { Comment, Avatar, Divider } from 'antd'
import React from 'react'
import './index.css'

export class CommentGuide extends React.Component {
  render() {
    return (
      <div>
        <Comment
          author={this.props.item.name}
          avatar={
            <Avatar src={this.props.item.avatar} alt={this.props.item.name} />
          }
          content={<p>{this.props.item.content}</p>}
        />{' '}
        <Divider />
      </div>
    )
  }
}
