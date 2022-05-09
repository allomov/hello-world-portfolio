import React, { useState, useEffect } from 'react';
import { List, message, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UsersPage = () => {
  const users = [
    {
      id: '1',
      email: "email@react.com",
      full_name: "Example Name",
      avatar_url: "https://randomuser.me/api/portraits/men/73.jpg"
    },
    {
      id: '1',
      email: "email@example.com",
      full_name: "One More Name",
      avatar_url: "https://randomuser.me/api/portraits/men/74.jpg"
    },
    {
      id: '1',
      email: "some@example.com",
      full_name: "Yet another Name",
      avatar_url: "https://randomuser.me/api/portraits/men/75.jpg"
    },
  ];

  return (
    <List>
        {users.map(user => (
          <List.Item key={user.email}>
            <List.Item.Meta
              avatar={<Avatar src={user.avatar_url} />}
              title={<StyledLink to={`/users/${user.id}/performances`}>{user.full_name}</StyledLink>}
              description={user.email}
            />
            <StyledLink to={`/users/${user.id}/performances`}>Perofmances >></StyledLink>
          </List.Item>
        ))}
    </List>
  );
};

const StyledLink = styled(Link)`

`;

export default UsersPage;
