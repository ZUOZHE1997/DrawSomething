import React from 'react'
import './index.css'
import { Card, Button, Slider } from 'antd'
import { Draw } from './draw'

export class DrawContent extends React.Component {
  componentDidMount() {
    let draw = new Draw('draw')
    // console.log(draw)
    draw.init()
  }

  render() {
    const silderStyle = {
      display: 'inline-block',
      height: 100,
      marginLeft: 10,
      marginTop: 20,
    }
    return (
      <Card>
        <div className="draw-content">
          <canvas width="600" height="500" id="draw" />
          <div className="operating-btn-list">
            <Button type="link" size="small">
              橡皮擦
            </Button>
            <Button type="link" size="small">
              撤销
            </Button>
            <Button type="link" size="small">
              重绘
            </Button>
            <div style={silderStyle}>
              <Slider vertical defaultValue={30} />
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
