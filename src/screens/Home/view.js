import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ActionButton from '~/components/ActionButton';
import GeniusText from '~/components/GeniusText';
import {
  Container,
  ContentWrapper,
  FooterView,
  LeaderboardWrapper,
  StatsWrapper,
} from './styles';
import Header from '~/components/Header';
import StatsCard from '~/components/StatsCard';
import LeaderboardCard from '~/components/LeaderboardCard';
import UsersModal from '~/components/UsersModal';

const HomeView = ({ greetings, statistics, leaderboard, handleGoToGame }) => {
  const { t } = useTranslation();

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <Container background="primary">
      <Header greetings={greetings} />

      <ContentWrapper>
        <GeniusText size={26} fontFamily="medium" color="textHeading" pLeft={8}>
          {t('HOME.STATS')}
        </GeniusText>

        <StatsWrapper>
          {statistics.map((item) => (
            <StatsCard key={item.results} data={item} />
          ))}
        </StatsWrapper>

        <GeniusText
          size={26}
          fontFamily="medium"
          color="textHeading"
          pLeft={8}
          pTop={24}>
          {t('HOME.TOP_LEADERBOARD')}
        </GeniusText>

        <LeaderboardWrapper>
          {leaderboard.map((item) => (
            <LeaderboardCard
              key={item.username}
              leaderboard={item}
              activeOpacity={0.75}
            />
          ))}
        </LeaderboardWrapper>
      </ContentWrapper>

      <FooterView>
        <ActionButton
          text={t('HOME.BUTTON_PLAY')}
          onPress={handleGoToGame}
          size={24}
          background="secondary"
          mBottom={16}
        />
        <ActionButton
          text="Adicionar novo jogador"
          onPress={onOpen}
          width={90}
          size={20}
          background="success"
        />
      </FooterView>
      <UsersModal modalRef={modalizeRef} />
    </Container>
  );
};

export default HomeView;
