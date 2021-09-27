import React from 'react';
import { useSelector } from 'react-redux';

import LeaderboardView from './view';

const Leaderboard = () => {
  const { data } = useSelector((state) => state.leaderboard);

  return <LeaderboardView leaderboard={data} />;
};

export default Leaderboard;
