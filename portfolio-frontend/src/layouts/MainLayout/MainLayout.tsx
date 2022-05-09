import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from './Logo';
const { Header, Content, Footer } = Layout;

export interface LayoutProps  { 
  children: React.ReactNode
}

export default (props: LayoutProps) => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      {props.children}
    </Content>
  </Layout>
);