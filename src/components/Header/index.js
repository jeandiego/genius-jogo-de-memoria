import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  IconButton,
  ViewWrapper,
  LineWrapper,
  CounterWrapper,
} from './styles';
import GeniusText from '../GeniusText';
import Trophy from '~/assets/svgs/trophy.svg';

const HeaderHome = ({ greetings }) => {
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

const HeaderGame = ({ user, ...props }) => {
  const { t } = useTranslation();

  return (
    <Container style={{ flexDirection: 'column' }} {...props}>
      <GeniusText size={18} fontFamily="bold" pBottom={8}>
        <GeniusText>Jogador:</GeniusText> Jean Diego
      </GeniusText>
      <LineWrapper>
        <CounterWrapper>
          <GeniusText size={24} fontFamily="bold" color="primary_dark">
            0
          </GeniusText>
          <GeniusText size={14} color="primary_dark">
            {t('GAME.MOVES')}
          </GeniusText>
        </CounterWrapper>
        <CounterWrapper>
          <GeniusText size={24} fontFamily="bold" color="primary_dark">
            00:00
          </GeniusText>
          <GeniusText size={14} color="primary_dark">
            {t('GAME.TIMER')}
          </GeniusText>
        </CounterWrapper>
      </LineWrapper>
    </Container>
  );
};

const Header = ({ type, ...props }) => {
  if (type === 'Game') {
    return <HeaderGame />;
  }
  return <HeaderHome {...props} />;
};

export default Header;
