import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import AuthenticationPage from 'pages/RegistrationPage/Authentication';

import HomePage from 'pages/homePage/Homepage';
function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="authentication" element={<AuthenticationPage />} />
          {/* <Route path="login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
