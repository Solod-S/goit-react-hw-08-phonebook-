import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App.jsx';
import { Box } from './components/Box/Box.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import { GlobalStyle } from 'styles/Global.style.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box bg="backGroundColor" height="100vh" justifyContent="center">
        <BrowserRouter basename="goit-react-hw-08-phonebook-">
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
              <GlobalStyle />
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);
