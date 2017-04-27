import React from 'react';
import './App.css';
import {Layout, Menu, Breadcrumb, Icon, Badge, Popover} from 'antd';
const SubMenu = Menu.SubMenu;
const {Header, Content, Sider} = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '1',
      openKeys: [],
    };
  }

  handleClick = e => {
    console.log('Clicked: ', e);
    this.setState({current: e.key});
  };

  onOpenChange = openKeys => {
    const state = this.state;
    const latestOpenKey = openKeys.find(
      key => !(state.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = state.openKeys.find(
      key => !(openKeys.indexOf(key) > -1)
    );

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({openKeys: nextOpenKeys});
  };

  getAncestorKeys = key => {
    return [key] || [];
  };

  render() {
    const text = <span>Register or Sign In</span>;
    const textBell = <span>Last Natification</span>;
    const contentBell = (
      <div>
        <p>Missed Call from Alexander</p>
        <p>5 minutes ago</p>
      </div>
    );
    return (
      <Layout className="main">
        <Header className="header">
          <Menu
            className="topmenu"
            theme="light"
            mode="horizontal"
          >
            <Menu.Item key="1">
              <Popover placement="bottom" title={text} trigger="click">
                <Icon className="side-menu-icon-size" type="rocket" />
              </Popover>
            </Menu.Item>
            <Menu.Item key="2">
              <Popover placement="bottom" title={textBell} content={contentBell} trigger="hover">
                <Icon className="side-menu-icon-size" type="bell" />
              </Popover>
            </Menu.Item>
            <Menu.Item key="3">
              <Popover placement="bottom" title={text} trigger="click">
                <Icon className="side-menu-icon-size" type="user-add" />
              </Popover>
            </Menu.Item>
          </Menu>
          <div className="logo">Sendway</div>
        </Header>
        <Layout>
          <Sider width={250} style={{background: '#fff'}}>
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              selectedKeys={[this.state.current]}
              onOpenChange={this.onOpenChange}
              onClick={this.handleClick}
            >
              <SubMenu
                className="side-menu"
                key="sub1"
                title={
                  <span>
                    <Badge className="badge" count={25}>
                      <Icon className="side-menu-icon-size" type="mail" />
                    </Badge>
                    <span className="side-menu-font-size">Mail</span>
                  </span>
                }
              >
                <Menu.Item key="1">Inbox</Menu.Item>
                <Menu.Item key="2">Starred</Menu.Item>
                <Menu.Item key="3">Sent</Menu.Item>
                <Menu.Item key="4">Trashbox</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon className="side-menu-icon-size" type="phone" />
                    <span className="side-menu-font-size">Calls</span>
                  </span>
                }
              >
                <Menu.Item key="5">Audio</Menu.Item>
                <Menu.Item key="6">Video</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon className="side-menu-icon-size" type="team" />
                    <span className="side-menu-font-size">Contacts</span>
                  </span>
                }
              >
                <Menu.Item key="7">Favorite</Menu.Item>
                <Menu.Item key="8">All</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon className="side-menu-icon-size" type="wallet" />
                    <span className="side-menu-font-size">Wallet</span>
                  </span>
                }
              >
                <Menu.Item key="9">Balance</Menu.Item>
                <Menu.Item key="10">Statistic</Menu.Item>
              </SubMenu>
              <SubMenu
                className="side-menu"
                key="sub5"
                title={
                  <span>
                    <Badge className="badge" count={4}>
                      <Icon className="side-menu-icon-size" type="shopping-cart" />
                    </Badge>
                    <span className="side-menu-font-size">Cart</span>
                  </span>
                }
              >
                <Menu.Item key="11">Item 1</Menu.Item>
                <Menu.Item key="12">Item 2</Menu.Item>
                <Menu.Item key="13">Item 3</Menu.Item>
                <Menu.Item key="14">Item 4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Breadcrumb className="breadcrump">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='content'>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
