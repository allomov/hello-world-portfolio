import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import styled from 'styled-components';

const MainMenu = () => {
  const location = useLocation();

  return (
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <StyledLink to="/">Welcome Page</StyledLink>
        </Menu.Item>
        <Menu.Item key="/users">
          <StyledLink to="/users">Users</StyledLink>
        </Menu.Item>
      </Menu>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  height: 48px;
  color: white;

  align-items: center;

  justify-content: center;
  padding-right: 16px;
  z-index: 10;
`;

export default MainMenu;
