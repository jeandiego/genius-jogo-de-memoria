import React from 'react';
import { Container, IconButton, ViewWrapper } from './styles';
import GeniusText from '../GeniusText';
import Trophy from '~/assets/svgs/trophy.svg';

const Header = ({ greetings }) => {
  return (
    <Container>
      <ViewWrapper>
        <GeniusText size={20} fontFamily="regular" color="textHeading">
          {greetings}
        </GeniusText>
        <GeniusText size={26} fontFamily="bold" color="textHeading">
          Jean Diego
        </GeniusText>
      </ViewWrapper>
      <IconButton>
        <Trophy width={30} height={30} fill="black" />
      </IconButton>
    </Container>
  );
};

export default Header;
