import React from 'react';
import GeniusText from '../GeniusText';

import { Container, ScoreWrapper, RankingView } from './styles';

const LeaderboardCard = ({ leaderboard, ...props }) => {
  const { username, position, plays } = leaderboard;

  return (
    <Container {...props}>
      <RankingView>
        <GeniusText color="textHeading" fontFamily="bold">
          {position}º
        </GeniusText>
      </RankingView>
      <GeniusText color="textHeading" size={18} fontFamily="medium">
        {username}
      </GeniusText>

      <ScoreWrapper>
        <GeniusText color="textHeading" size={20} fontFamily="bold">
          {plays}
        </GeniusText>
        <GeniusText color="textHighlight" fontFamily="bold" size={14}>
          jogadas
        </GeniusText>
      </ScoreWrapper>
    </Container>
  );
};

export default LeaderboardCard;
