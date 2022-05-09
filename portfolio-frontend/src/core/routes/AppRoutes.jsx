import { BrowserRouter, Routes, Redirect, Route, Router, Switch } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import WelcomePage from 'pages/WelcomePage';
import UsersPage from 'pages/UsersPage';

const AppRoutes = ({ history }) => (
  <BrowserRouter>
    <Routes history={history}>
      <Route exact path="/" element={<MainLayout><WelcomePage /></MainLayout>} />
      <Route exact path="/users" element={<MainLayout><UsersPage /></MainLayout>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
