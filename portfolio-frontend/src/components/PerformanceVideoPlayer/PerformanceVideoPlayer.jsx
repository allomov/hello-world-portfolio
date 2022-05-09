import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WebcamStreamCapture from './WebcamStreamCapture';

const PerformanceVideoPlayer = () => {
  return (
    <>
      <WebcamStreamCapture/>
    </>
  );
};

const StyledLink = styled(Link)`

`;

export default PerformanceVideoPlayer;
