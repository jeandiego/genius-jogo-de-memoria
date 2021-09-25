import React from 'react';
import { Container } from './styles';

const GlobalContainer = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default GlobalContainer;
