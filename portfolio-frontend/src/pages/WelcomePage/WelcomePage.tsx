import { useState, useEffect } from "react";
import { Typography } from 'antd';

const { Title, Text } = Typography;

const WelcomePage = () => {
  return (
    <>
      <Title>Welcome to Hello World Portfolios.</Title>
      <Text>This is the place for your greeting videos</Text>
    </>
  );
};

export default WelcomePage;
