import { Route, Routes, Navigate } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import AuthenticationPage from 'pages/AuthenticationPage/AuthenticationPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import Home from 'pages/HomePage/Home';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<AppBar />}>
          <Route index element={<Home />} />

          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactPage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="authentication" element={<AuthenticationPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
