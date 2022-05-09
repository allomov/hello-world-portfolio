import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import logo from 'assets/images/logo.svg';
import { SmileOutlined } from '@ant-design/icons';

const Logo = () => {
  return (
    <Container>
      <StyledLink to="/">
        <StyledLogo />
        {/*<h1>Hello World Portfolio</h1>*/}
      </StyledLink>
    </Container>
  );
};

const StyledLogo = styled(SmileOutlined)`
  font-size: 2em;

`

const StyledLink = styled(Link)`
  display: flex;
  height: 48px;
  color: white;

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
