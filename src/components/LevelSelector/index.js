import React from 'react';
import GeniusText from '../GeniusText';
import { Container } from './styles';

const LevelSelector = ({ text }) => {
  return (
    <Container>
      <GeniusText size={18} fontFamily="bold" color="textHeading">
        {text}
      </GeniusText>
    </Container>
  );
};

export default LevelSelector;
