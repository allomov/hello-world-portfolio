import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from './Logo';
import MainMenu from './MainMenu';
const { Header, Content, Footer } = Layout;

export interface LayoutProps  { 
  children: React.ReactNode
}

function handleResize(handler: (isMobile: boolean) => void) {
  
}

export default (props: LayoutProps) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener('resize', (e) => setWindowHeight(window.innerHeight));
  }, [])

  return (
    <Layout>
      <Header>
        <Logo />
        <MainMenu />
      </Header>
      <Content style={{ margin: 16 }}>
        <div style={{ padding: 16, background: '#fff', minHeight: windowHeight - 150 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>Hello World Portfolio Inc.</Footer>
    </Layout>
  )
};