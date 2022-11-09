import { Route, Routes, Navigate } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import AuthenticationPage from 'pages/Authentication/Authentication';
import ContactPage from 'pages/ContactPage/ContactPage';

import HomePage from 'pages/HomePage/Homepage';
function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          {/* <Route index element={<div>Home</div>} /> */}
          <Route path="authentication" element={<AuthenticationPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
