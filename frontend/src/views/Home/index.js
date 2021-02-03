import React, { useState } from 'react'
import { Drawer } from '_antd@4.11.2@antd'
import { DrawContent } from '../Content'
import { MsgBoard } from '../MsgBoard'
export function LayoutContent() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Drawer
        width="600"
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <MsgBoard />
      </Drawer>
      <DrawContent showDrawer={showDrawer} />
    </>
  )
}
