import {
  ChakraProvider,
  CSSReset,
  ColorModeProvider,
  extendTheme,
} from '@chakra-ui/react';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Router } from './routes';
import { store } from './store';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Titillium Web',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <Provider store={store}>
          <Suspense fallback={<div>Loading...</div>}>
            <Router />
          </Suspense>
        </Provider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
