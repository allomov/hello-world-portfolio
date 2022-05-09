import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PerformanceVideoPlayer from 'components/PerformanceVideoPlayer';

const { Title, Text } = Typography;

const PerformanceDetailsPage = () => {
  // const [performanceTitle, setPerformanceTitle] = useState();
  // const [performanceVideo, setPerformanceTitle] = useState("");

  return (
    <>
      <PerformanceVideoPlayer />
    </>
  );
};

const StyledLink = styled(Link)`

`;

export default PerformanceDetailsPage;
