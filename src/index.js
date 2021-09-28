import React from 'react';
import './config/ReactotronConfig';
import '~/lang';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import GlobalStyle from './global/styles';
import { Routes } from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Routes />
      </GlobalStyle>
    </Provider>
  );
};

export default App;
