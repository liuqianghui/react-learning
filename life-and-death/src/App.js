import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { Tabs } from 'antd'
import 'antd/dist/antd.css'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

function App() {
  return (
    <div className="App">
      <p>管理系统</p>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="账号登录" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="手机登录" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="扫码登录" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      ,
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DatePicker />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App
