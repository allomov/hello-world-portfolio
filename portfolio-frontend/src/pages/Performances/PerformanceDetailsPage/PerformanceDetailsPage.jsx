import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Typography, Spin, Row } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import { getPerformance } from 'services/PerformancesApi';

const { Title, Text } = Typography;

const PerformanceDetailsPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [performance, setPerformance] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function loadPerformance() {
      const performance = await getPerformance({id});
      setLoading(false);
      setPerformance(performance);
    }
    loadPerformance();
  }, []);

  return (
    <Spin spinning={isLoading}>
      <Row><Title>{performance.title || "Undefined"}</Title></Row>
      <Row><Text>{moment(performance.createdAt).fromNow()}</Text></Row>
      <br/>
      <Row>
        <video controls src={performance.recordingUrl}>
          <source src={performance.recordingUrl} type="video/webm"/>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </Row>
    </Spin>
  );
};

export default PerformanceDetailsPage;
