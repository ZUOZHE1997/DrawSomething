# DrawSomething

## 你画我猜

## 技术栈

#### 前端 :Vue3 + Vue-router + Vuex + Socket.io

#### 服务端: Node.js (Koa2) + Socket.io

## 目录简介:

### 服务端目录 :

```
├─controller // websocket文件
├─router // 路由文件
├─lib //配置跨域
├─app.js // 主程序
└─config.js // 配置(端口等)
```

### 前端目录:

```
├─assets // 静态资源
│ └─style // 公共样式
├─components // 组件
├─router // 路由
├─store // 公共信息
├─utils // canvas封装的class
└─views // 页面
```

## 启动:

```
cd backend
npm install
node app.js
```

```
cd frontend
npm install
npm run serve
open browser http://localhost:8080
```
