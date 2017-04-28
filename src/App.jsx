import React from 'react';
import './App.css';
import { Layout, Breadcrumb } from 'antd';
const { Sider, Footer, Content } = Layout;

import HeaderMain from './components/Header';
import SideMenu from './components/SideMenu';

function App(props) {
  return (
    <Layout className="main">
      <HeaderMain />
      <Layout>
        <Sider
          width={250}
          style={{ background: '#fff' }}
          breakpoint="md"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <SideMenu mode="inline" />
        </Sider>
        <Layout>
          <Content className="content">
            {props.children}
          </Content>
          <Footer style={{ textAlign: 'center', background: '#fff' }}>
            © 2015 Sendway
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
