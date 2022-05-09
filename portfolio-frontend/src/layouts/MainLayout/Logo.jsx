import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import logo from 'assets/images/logo.svg';
import { CopyOutlined } from '@ant-design/icons';

const Logo = () => {
  return (
    <Container>
      <StyledLink to="/">
        <CopyOutlined />
      </StyledLink>
    </Container>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  height: 48px;

  align-items: center;

  justify-content: center;
  padding-right: 16px;
  z-index: 10;

  img {
    width: 28px;
  }
`;

const Container = styled.div`
  width: 32px;
  display: flex;
  flex: 0 0 auto;
  float: left;
  margin-right: 16px;
`;

export default Logo;
