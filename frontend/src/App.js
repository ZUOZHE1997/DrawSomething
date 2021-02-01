import './App.css'
import {Layout} from 'antd'
import {BoxHeader} from "./views/Header"
import {PeopleList} from "./views/Room";
import {MsgBoard} from "./views/MsgBoard";
import  {DrawContent} from "./views/Content"
const {Header, Sider, Content} = Layout

function App() {
    return (
        <Layout >
            <Header>
                <BoxHeader/>
            </Header>
            <Layout>
                <Sider width="200" theme="light">
                    <PeopleList/>
                </Sider>
                <Content className="layout-content">
                    <DrawContent />
                </Content>
                <Sider width="600" theme="light"><MsgBoard /></Sider>
            </Layout>
            {/*<Footer>Footer</Footer>*/}
        </Layout>
    )
}

export default App
