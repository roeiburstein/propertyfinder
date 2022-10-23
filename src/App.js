import 'antd/dist/antd.css'
import { Layout, Button , Menu } from 'antd'
import React, { useState, useRef } from 'react'
import { callApi } from './services/apiCall'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout


const App = () => {
  const [collapsed, setCollapsed] = useState(false)

  function handleSearch() {
    const data = callApi(location, minValue, maxValue);
    console.log("DATA", data)
  }

  function displayResults(data){
    console.log("in display data")
    console.log(data)
  }

  const [location, setLocation]=useState(null)
  const [minValue, setMin]=useState(null)
  const [maxValue, setMax]=useState(null)

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    }
  }
  
  const items = [
    getItem('Home Page', '1', <PieChartOutlined />),
    getItem('Saved Houses', '2', <DesktopOutlined />),
    getItem('Files', '9', <FileOutlined />),
    getItem('Settings', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
   
  ]
  

  function getLocation(val){
    setLocation(val.target.value)
  }
  function getMin(val){
    setMin(val.target.value)
  }
  function getMax(val){
    setMax(val.target.value)
  }



  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} style={{marginTop: '60px'}}/>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
          
        />
        <h1> House Cashflow Api </h1>
        <Content
          style={{margin: '0 16px'}} >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
          <div>
            <h1> Location: </h1>
            <input type="text" onChange={getLocation} />
            <h1> Min Value: </h1>
            <input type="text" onChange={getMin} />
            <h1> Max Value: </h1>
            <input type="text" onChange={getMax} />
            <br></br>
            <button onClick={()=>handleSearch(location, minValue, maxValue)} >Run API</button>
          </div>
          </div>
        </Content>
        <Footer  style={{textAlign: 'center'}}>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
