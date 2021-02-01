import React from "react"
import "./index.css"
import { Card } from 'antd';



export class DrawContent extends React.Component {

    render() {
        return <div className="draw-content">
            <Card >
                <canvas  className="canvas-content" />
            </Card>,
        </div>
    }
}
