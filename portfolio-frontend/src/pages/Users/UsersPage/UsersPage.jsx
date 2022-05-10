import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Spin } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUsers } from 'services/UsersApi';

const UsersPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const users = await getUsers();
      setLoading(false);
      setUsers(users);
    }
    loadUsers();
  }, []);

  return (
    <Spin spinning={isLoading}>
      <List>
        {users.map(user => (
          <List.Item key={user.id}>
            <List.Item.Meta
              avatar={<Avatar src={user.avatarUrl} />}
              title={<StyledLink to={`/users/${user.id}/performances`}>{user.fullName}</StyledLink>}
              description={user.email}
            />
            <StyledLink to={`/users/${user.id}/performances`}>Perofmances</StyledLink>
          </List.Item>
        ))}
      </List>
    </Spin>
  );
};

const StyledLink = styled(Link)`

`;

export default UsersPage;
