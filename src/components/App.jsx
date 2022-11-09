import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import AuthenticationPage from 'pages/RegistrationPage/Authentication';
import ContactPage from 'pages/ContactPage/ContactPage';
import HomePage from 'pages/HomePage/Homepage';
function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="authentication" element={<AuthenticationPage />} />
          <Route path="contacts" element={<ContactPage />} />
          {/* <Route path="login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
