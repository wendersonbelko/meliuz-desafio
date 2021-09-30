import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './store';

import Theme from './static/theme';
import { GlobalStyle } from './static/global';
import { ButtonMenu } from './components';

import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <ButtonMenu />
          <Routes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
