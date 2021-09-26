import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '~/services/gameServices';
import GameView from './view';
import { clearCards, setCard } from '~/store/reducers/game';

const Game = () => {
  const { cards, firstCard, secondCard, lockedMode } = useSelector(
    (state) => state.game,
  );
  const dispatch = useDispatch();

  const handleShownCard = (card) => {
    if (!lockedMode) dispatch(setCard(card));
  };

  const checkMatch = (_firstCard, _secondCard) => {
    const check = _firstCard.name === _secondCard.name;

    if (!check) {
      setTimeout(() => dispatch(clearCards(check)), 1000);
    } else {
      setTimeout(() => dispatch(clearCards(check)), 1000);
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (lockedMode) checkMatch(firstCard, secondCard);
  }, [lockedMode]);

  return <GameView cards={cards} onPress={handleShownCard} />;
};

export default Game;
