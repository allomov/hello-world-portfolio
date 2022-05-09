import React, { useState, useEffect } from 'react';
import { List, message, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UsersPage = () => {
  const users = [
    {
      email: "email@react.com",
      full_name: "Example Name",
      avatar_url: "https://randomuser.me/api/portraits/men/73.jpg"
    },
    {
      email: "email@example.com",
      full_name: "One More Name",
      avatar_url: "https://randomuser.me/api/portraits/men/74.jpg"
    },
    {
      email: "some@example.com",
      full_name: "Yet another Name",
      avatar_url: "https://randomuser.me/api/portraits/men/75.jpg"
    },
  ];

  return (
    <List>
        {users.map(item => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar_url} />}
              title={<StyledLink to="/users">{item.full_name}</StyledLink>}
              description={item.email}
            />
          </List.Item>
        ))}
    </List>
  );
};

const StyledLink = styled(Link)`

`;

export default UsersPage;
