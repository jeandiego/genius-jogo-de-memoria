import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '~/services/gameServices';
import GameView from './view';
import { setCardStatus } from '~/store/reducers/game';

const Game = () => {
  const { cards } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleShownCard = (card) => {
    dispatch(setCardStatus(card));
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {}, [cards]);

  return <GameView cards={cards} onPress={handleShownCard} />;
};

export default Game;
