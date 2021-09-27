import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import ActionButton from '~/components/ActionButton';
import GlobalContainer from '~/components/Container';
import { EmptyLeaderboard } from '~/components/EmptyComponent';
import GeniusText from '~/components/GeniusText';
import LeaderboardCard from '~/components/LeaderboardCard';

const LeaderboardView = ({ leaderboard }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <GlobalContainer>
      <GeniusText size={32} fontFamily="bold">
        {t('LEADERBOARD.TITLE')}
      </GeniusText>
      <FlatList
        data={leaderboard}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 24,
        }}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <EmptyLeaderboard size={160} message={t('LEADERBOARD.MESSAGE')} />
        )}
        renderItem={({ item, index }) => (
          <LeaderboardCard
            disabled
            key={item.id}
            position={index + 1}
            leaderboard={item}
            activeOpacity={0.75}
          />
        )}
      />
      <ActionButton
        text={t('LEADERBOARD.GOBACK')}
        onPress={() => navigation.goBack()}
        size={24}
        background="secondary"
      />
    </GlobalContainer>
  );
};

export default LeaderboardView;
