import avatar from './avatar.svg'
import { Avatar } from 'antd'

import './index.css'

export function PeopleList() {
  const list = [
    {
      name: 'TOM',
      avatar: avatar,
    },
    {
      name: 'TOM',
      avatar: avatar,
    },
  ]
  const listRender = list.map((p, index) => {
    return (
      <div key={index} className="People-list-line">
        <Avatar src={p.avatar} size="40" />
        {p.name}
      </div>
    )
  })
  return <div className="People-list">{listRender} </div>
}
