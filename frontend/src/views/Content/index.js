import React from 'react'
import './index.css'
import { Button, Slider, Tooltip } from 'antd'
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
      width: 100,
    }
    return (
      <div className="draw-content">
        <canvas id="draw" />
        <div className="operating-btn-list">
          <Button type="primary" onClick={this.props.showDrawer}>
            打开会话框
          </Button>
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
    )
  }
}
