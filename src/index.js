import React from 'react';
import './config/ReactotronConfig';
import GlobalStyle from './global/styles';
import { Routes } from './routes';

const App = () => {
  return (
    <GlobalStyle>
      <Routes />
    </GlobalStyle>
  );
};

export default App;
