import './App.css'
import { Layout } from 'antd'
import { BoxHeader } from './views/Header'
import { PeopleList } from './views/Room'
import { MsgBoard } from './views/MsgBoard'
import { DrawContent } from './views/Content'
import { io,socket } from './api'
const { Header, Sider, Content } = Layout
console.log(socket)
socket.on('connect', () => {
  socket.on('send', (data) => {
    console.log(data)
  })
  console.log(socket.id) // 'G5p5...'
})

function App() {
  return (
    <Layout>
      <Header>
        <BoxHeader />
      </Header>
      <Layout>
        <Sider width="200" theme="light">
          <PeopleList />
        </Sider>
        <Content className="layout-content">
          <DrawContent />
        </Content>
        <Sider width="400" theme="light">
          <MsgBoard />
        </Sider>
      </Layout>
      {/*<Footer>Footer</Footer>*/}
    </Layout>
  )
}

export default App
