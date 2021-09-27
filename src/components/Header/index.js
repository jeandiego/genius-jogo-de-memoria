import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Container,
  IconButton,
  ViewWrapper,
  LineWrapper,
  ColumnWrapper,
} from './styles';
import GeniusText from '../GeniusText';
import Trophy from '~/assets/svgs/trophy.svg';

const HeaderHome = ({ greetings }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <ViewWrapper>
        <GeniusText
          size={20}
          fontFamily="regular"
          color="textHeading"
          pBottom={4}>
          {greetings}
        </GeniusText>
        <GeniusText size={26} fontFamily="bold" color="textHeading">
          {currentUser?.user}
        </GeniusText>
      </ViewWrapper>
      <IconButton>
        <Trophy width={30} height={30} fill="black" />
      </IconButton>
    </Container>
  );
};

const HeaderGame = ({ ...props }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { moves } = useSelector((state) => state.game);
  const { t } = useTranslation();

  return (
    <Container {...props}>
      <ViewWrapper>
        <LineWrapper>
          <ColumnWrapper background="primary_dark">
            <GeniusText color="secondary" fontFamily="bold">
              {t('GAME.PLAYER')}
            </GeniusText>
          </ColumnWrapper>
          <ColumnWrapper background="primary_dark">
            <GeniusText color="secondary" fontFamily="bold">
              {t('GAME.MOVES')}
            </GeniusText>
          </ColumnWrapper>
        </LineWrapper>
        <LineWrapper>
          <ColumnWrapper>
            <GeniusText
              size={18}
              fontFamily="bold"
              color="primary_dark"
              numberOfLines={1}>
              {currentUser?.user}
            </GeniusText>
          </ColumnWrapper>
          <ColumnWrapper>
            <GeniusText size={24} fontFamily="bold" color="primary_dark">
              {moves}
            </GeniusText>
          </ColumnWrapper>
        </LineWrapper>
      </ViewWrapper>
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
