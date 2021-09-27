import React from 'react';
import { useSelector } from 'react-redux';

import LeaderboardView from './view';

const Leaderboard = () => {
  const { leaderboard } = useSelector((state) => state);

  return <LeaderboardView leaderboard={leaderboard} />;
};

export default Leaderboard;
