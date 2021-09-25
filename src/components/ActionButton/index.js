import React from 'react';
import GeniusText from '../GeniusText';

import { Container } from './styles';

const ActionButton = ({ text, ...rest }) => {
  return (
    <Container {...rest}>
      <GeniusText color="white" size={24} fontFamily="bold">
        {text}
      </GeniusText>
    </Container>
  );
};

export default ActionButton;
