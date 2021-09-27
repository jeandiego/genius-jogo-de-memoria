import React from 'react';
import { Container, SvgView } from './styles';
import UfoSvg from '~/assets/svgs/ufo.svg';
import GeniusText from '../GeniusText';

export function EmptyLeaderboard({ size, message }) {
  return (
    <Container>
      <SvgView>
        <UfoSvg width={size} height={size} />
      </SvgView>
      <GeniusText size={18} align="center" color="textHighlight">
        {message}
      </GeniusText>
    </Container>
  );
}
