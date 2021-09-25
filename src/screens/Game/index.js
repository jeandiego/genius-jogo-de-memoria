import React from 'react';
import GameView from './view';

const Game = () => {
  const cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return <GameView cards={cards} />;
};

export default Game;
