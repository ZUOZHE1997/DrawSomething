import {Layout} from "_antd@4.11.2@antd";
import {BoxHeader} from "../Header";
import {PeopleList} from "../Room";
import {DrawContent} from "../Content";
import {MsgBoard} from "../MsgBoard";
import React from "_react@17.0.1@react";
const {Header, Sider, Content} = Layout

export function LayoutContent() {
    return (
        <Layout>
            <Header>
                <BoxHeader/>
            </Header>
            <Layout>
                <Sider width="200" theme="light">
                    <PeopleList/>
                </Sider>
                <Content className="layout-content">
                    <DrawContent/>
                </Content>
                <Sider width="400" theme="light">
                    <MsgBoard/>
                </Sider>
            </Layout>
            {/*<Footer>Footer</Footer>*/}
        </Layout>
    )
}
