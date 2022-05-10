import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Typography, Input, Spin, Button, Row } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PerformanceVideoPlayer from 'components/PerformanceVideoPlayer';
import { createPerformance } from 'services/PerformancesApi';

const { Title, Text } = Typography;

const PerformanceDetailsPage = () => {
  const [isReady, setReady] = useState(false);
  const [canSumbit, setCanSumbit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [performanceTitle, setPerformanceTitle] = useState("");
  const [performanceVideo, setPerformanceVideo] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();

  const createUserPerformances = async () => {
    setLoading(true);
    const performance = await createPerformance({
      userId:    userId,
      title:     performanceTitle,
      recording: performanceVideo
    });
    navigate(`/performances/${performance.id}`);
  }

  return (
    <>
      <Title>Record New Performance</Title>
      <Spin spinning={!isReady || isLoading}>
        <TitleInput
          placeholder="Enter Title Here"
          value={performanceTitle}
          onChange={e => setPerformanceTitle(e.target.value)} />
        <PerformanceVideoPlayer
          onVideoChange={(data) => {setPerformanceVideo(data); setCanSumbit(true)}}
          onReadynessChange={() => setReady(true)}/>
        <ActionsContainer justify="end">
          <Button type="dashed" onClick={() => navigate('/users/' + userId + '/performances')}>Cancel</Button>
          <Button disabled={!canSumbit} type="primary" onClick={createUserPerformances}>Submit</Button>
        </ActionsContainer>
      </Spin>
    </>
  );
};

const TitleInput = styled(Input)`
  width: 720px;
  margin-bottom: 20px;
`;

const ActionsContainer = styled(Row)`
  width: 720px;
  text-align: 'right';
  button {
    margin-right: 10px;
  }
`;

export default PerformanceDetailsPage;
