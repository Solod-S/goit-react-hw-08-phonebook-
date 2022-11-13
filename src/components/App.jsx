import { Route, Routes, Navigate } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import AuthenticationPage from 'pages/Authentication/Authentication';
import ContactPage from 'pages/ContactPage/ContactPage';
import Home from 'pages/Home/Home';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
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
