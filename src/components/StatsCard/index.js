import React from 'react';
import GeniusText from '../GeniusText';

import { Container, TextWrapper } from './styles';

const StatsCard = ({ data }) => {
  return (
    <Container>
      <TextWrapper>
        <GeniusText
          color="primary"
          align="center"
          size={18}
          fontFamily="medium"
          pBottom={24}>
          {data.text}
        </GeniusText>
        <GeniusText color="primary" align="center" size={64} fontFamily="bold">
          {data.results}
        </GeniusText>
      </TextWrapper>
    </Container>
  );
};

export default StatsCard;
