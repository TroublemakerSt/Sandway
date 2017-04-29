import React from 'react';
import { Layout, Menu, Icon, Popover } from 'antd';
const { Header } = Layout;
import { Link } from 'react-router';

function HeaderMain() {
  const text = <span>Register or Sign In</span>;
  const textBell = <span>Last Natification</span>;
  const contentBell = (
    <div>
      <p>Missed Call from Alexander</p>
      <p>5 minutes ago</p>
    </div>
  );

  return (
    <Header
      className="header">
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
          <Link to="/signin">
            <Icon className="side-menu-icon-size" type="user-add" />
          </Link>
        </Menu.Item>
      </Menu>
      <div className="logo">Sendway</div>
    </Header>
  );
}

export default HeaderMain;
