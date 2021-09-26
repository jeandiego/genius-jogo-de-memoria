import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation, CommonActions } from '@react-navigation/native';
import ActionButton from '~/components/ActionButton';
import GeniusText from '~/components/GeniusText';
import {
  Container,
  ContentWrapper,
  FooterAction,
  LeaderboardWrapper,
  StatsWrapper,
} from './styles';
import Header from '~/components/Header';
import StatsCard from '~/components/StatsCard';
import LeaderboardCard from '~/components/LeaderboardCard';

const HomeView = ({ greetings, statistics, leaderboard }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleGoToGame = () => {
    navigation.navigate('Game');
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

      <FooterAction>
        <ActionButton
          text={t('HOME.BUTTON_PLAY')}
          onPress={handleGoToGame}
          background="secondary"
        />
      </FooterAction>
    </Container>
  );
};

export default HomeView;
