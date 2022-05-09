import { BrowserRouter, Routes, Redirect, Route, Router, Switch } from 'react-router-dom';
import AppLayout from 'layouts/MainLayout';
import WelcomePage from 'pages/WelcomePage';

const AppRoutes = ({ history }) => (
  <BrowserRouter>
    <Routes history={history}>
      <Route exact path="/" element={<AppLayout><WelcomePage /></AppLayout>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
