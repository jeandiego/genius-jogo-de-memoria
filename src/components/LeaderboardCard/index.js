import React from 'react';
import GeniusText from '../GeniusText';

import { Container, ScoreWrapper, RankingView } from './styles';

const LeaderboardCard = ({ leaderboard, position, ...props }) => {
  const { user, moves } = leaderboard;

  return (
    <Container {...props}>
      <RankingView>
        <GeniusText color="textHeading" fontFamily="bold">
          {position}º
        </GeniusText>
      </RankingView>
      <GeniusText color="textHeading" size={18} fontFamily="medium">
        {user}
      </GeniusText>

      <ScoreWrapper>
        <GeniusText color="textHeading" size={20} fontFamily="bold">
          {moves}
        </GeniusText>
        <GeniusText color="textHighlight" fontFamily="bold" size={14}>
          jogadas
        </GeniusText>
      </ScoreWrapper>
    </Container>
  );
};

export default LeaderboardCard;
