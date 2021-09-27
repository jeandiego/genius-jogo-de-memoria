import React from 'react';
import GeniusText from '../GeniusText';

import { Container } from './styles';

const ActionButton = ({ text, size, ...rest }) => {
  return (
    <Container {...rest}>
      <GeniusText color="white" size={size} fontFamily="bold">
        {text}
      </GeniusText>
    </Container>
  );
};

export default ActionButton;
