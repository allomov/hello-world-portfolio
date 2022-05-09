import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Typography, Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { PlusCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';

const {Title} = Typography;

const UserPerformancesPage = () => {
  const { userId } = useParams();
  const userPerformances = [
    {
      id: "1",
      userId: "1",
      title: "title"
    }
  ];

  return (
    <>
      <Title>
        Peroformances
        <AddButton to={`/users/${userId}/performances/new`}><PlusCircleFilled /></AddButton>
      </Title>
      <List>
          {userPerformances.map(performance => (
            <List.Item key={performance.userId}>
              <List.Item.Meta
                title={<StyledLink to={`/performances/${performance.id}`}>{performance.title}</StyledLink>}

              />
            </List.Item>
          ))}
      </List>
    </>
  );
};

const AddButton = styled(Link)`
  font-size: 0.8em;
  margin-left: 0.5em;
  color: rgba(0, 0, 0, 0.85);
`;

const StyledLink = styled(Link)`

`;

export default UserPerformancesPage;
