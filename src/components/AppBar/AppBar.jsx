// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Nav } from './AppBar.styled.jsx';
import { LogOut } from 'components/LogOut/LogOut.jsx';
import { Box } from 'components/Box/Box';
import { useSelector } from 'react-redux';
export const AppBar = () => {
  const authPassed = useSelector(state => state.token);
  return (
    <Box m="0 auto">
      <Header id="up">
        <Nav>
          <Link end="true" to="/">
            Home
          </Link>
          {authPassed && (
            <Link end="true" to="contacts">
              Contacts
            </Link>
          )}

          {!authPassed && <Link to="authentication">Authentication</Link>}
          {authPassed && <LogOut />}
        </Nav>
      </Header>
      <Outlet />
    </Box>
  );
};
