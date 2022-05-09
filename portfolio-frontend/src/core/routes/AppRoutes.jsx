// import React from 'react';
import { BrowserRouter, Routes, Redirect, Route, Router, Switch } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import WelcomePage from 'pages/WelcomePage';
import UsersPage from 'pages/Users/UsersPage';
import UserPerformancesPage from 'pages/Performances/UserPerformancesPage';
import NewPerformancePage from 'pages/Performances/NewPerformancePage';
import PerformanceDetailsPage from 'pages/Performances/PerformanceDetailsPage';

const AppRoutes = ({ history }) => (
  <BrowserRouter>
    <Routes history={history}>
      <Route exact path="/" element={<MainLayout><WelcomePage /></MainLayout>} />
      <Route exact path="/users" element={<MainLayout><UsersPage /></MainLayout>} />
      <Route exact path="/users/:userId/performances" element={<MainLayout><UserPerformancesPage /></MainLayout>} />
      <Route exact path="/users/:userId/performances/new" element={<MainLayout><NewPerformancePage /></MainLayout>} />
      <Route exact path="/performances/:id" element={<MainLayout><PerformanceDetailsPage /></MainLayout>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
