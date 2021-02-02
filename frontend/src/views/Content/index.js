import React from 'react'
import './index.css'
import { Card, Button, Slider, Tooltip } from 'antd'
import { Draw } from './draw'

export class DrawContent extends React.Component {
  constructor() {
    super()
    this.draw = ''
    this.state = {
      disabled: true,
    }
  }
  componentDidMount() {
    this.draw = new Draw({ element: 'draw' })
    this.draw.init()
    this.setState({
      disabled: false,
    })
  }
  changeLineWidth(value) {
    if (this.draw) {
      this.draw.changeLine(value)
    }
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
            {}
            <Button
              type="link"
              size="small"
              onClick={() => {
                this.draw.checkPen()
              }}
            >
              画笔
            </Button>
            <Tooltip title="有BUG,暂时不要用" color="red">
              <Button
                type="link"
                size="small"
                onClick={() => {
                  this.draw.cleaning()
                }}
              >
                橡皮擦
              </Button>
            </Tooltip>

            <Button
              type="link"
              size="small"
              onClick={() => {
                this.draw.undo()
              }}
            >
              撤销
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                this.draw.reset()
              }}
            >
              重绘
            </Button>
            <div style={silderStyle}> 
              <Slider
                vertical
                disabled={this.state.disabled}
                defaultValue={3}
                onAfterChange={(value) => {
                  this.changeLineWidth(value)
                }}
                max={12}
                min={2}
              />
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
