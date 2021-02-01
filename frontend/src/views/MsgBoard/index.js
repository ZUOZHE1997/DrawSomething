import React from "react"
import "./index.css"
import {Input} from 'antd';
import {Comment, Avatar} from 'antd';
import {Button} from 'antd';


const {TextArea} = Input;

export class MsgBoard extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div className="message-board">
            <div className="message-board-show">
                <Comment
                    author="Han Solo"
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"/>}
                    content={<p>We supply a series of design principles</p>}
                />
            </div>

            <TextArea showCount={true} maxLength={40} autoSize={{minRows: 4}}/>
            <Button type="primary" block>提交</Button>
        </div>
    }
}
