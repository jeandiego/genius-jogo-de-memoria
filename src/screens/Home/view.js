import React from 'react';
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
import { EmptyLeaderboard } from '~/components/EmptyComponent';

const HomeView = ({
  user,
  greetings,
  statistics,
  leaderboard,
  goToGame,
  goToLeaderboard,
  onOpen,
  modalRef,
}) => {
  const { t } = useTranslation();

  return (
    <Container background="primary">
      <Header greetings={greetings} goToLeaderboard={goToLeaderboard} />

      <ContentWrapper>
        <GeniusText size={26} fontFamily="bold" color="textHeading" pLeft={8}>
          {t('HOME.STATS')}
        </GeniusText>

        <StatsWrapper>
          {statistics.map((item) => (
            <StatsCard key={item.id} data={item} />
          ))}
        </StatsWrapper>

        <GeniusText
          size={26}
          fontFamily="bold"
          color="textHeading"
          pLeft={8}
          pTop={24}>
          {t('HOME.TOP_LEADERBOARD')}
        </GeniusText>

        <LeaderboardWrapper>
          {!leaderboard.length ? (
            <EmptyLeaderboard
              size={64}
              message={t('LEADERBOARD.UFO_MESSAGE')}
            />
          ) : (
            leaderboard
              .slice(0, 3)
              .map((item, index) => (
                <LeaderboardCard
                  key={item.id}
                  position={index + 1}
                  leaderboard={item}
                  activeOpacity={0.8}
                  onPress={goToLeaderboard}
                />
              ))
          )}
        </LeaderboardWrapper>
      </ContentWrapper>

      <FooterView>
        <ActionButton
          text={t('HOME.BUTTON_PLAY')}
          onPress={goToGame}
          size={24}
          background="secondary"
          mBottom={8}
        />
        <ActionButton
          text={t('HOME.BUTTON_ADD_CHANGE')}
          onPress={onOpen}
          size={18}
          background="primary_dark"
        />
      </FooterView>
      <UsersModal modalRef={modalRef} />
    </Container>
  );
};

export default HomeView;
