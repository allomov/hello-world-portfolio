import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Typography, Button, Spin } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { PlusCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { getUserPerformances } from 'services/PerformancesApi';

const {Title} = Typography;

const UserPerformancesPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [userPerformances, setUserPerformances] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    async function loadUserPerformances() {
      const users = await getUserPerformances({userId: userId});
      setLoading(false);
      setUserPerformances(users);
    }
    loadUserPerformances();
  }, []);


  return (
    <Spin spinning={isLoading}>
      <Title>
        Peroformances
        <AddButton to={`/users/${userId}/performances/new`}><PlusCircleFilled /></AddButton>
      </Title>
      <List>
          {userPerformances.map(performance => (
            <List.Item key={performance.userId}>
              <List.Item.Meta
                title={<StyledLink to={`/performances/${performance.id}`}>{performance.title || "Undefined"}</StyledLink>}
              />
            </List.Item>
          ))}
      </List>
    </Spin>
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
