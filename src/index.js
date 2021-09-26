import React from 'react';
import './config/ReactotronConfig';
import '~/lang';
import { Provider } from 'react-redux';
import GlobalStyle from './global/styles';
import { Routes } from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle>
        <Routes />
      </GlobalStyle>
    </Provider>
  );
};

export default App;
