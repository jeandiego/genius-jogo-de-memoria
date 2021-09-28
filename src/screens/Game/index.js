import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GameView from './view';
import { clearCards, clearGame, setCard } from '~/store/reducers/game';
import { StartGame } from '~/services/gameServices';
import { addUserScore } from '~/store/reducers/leaderboard';

const Game = () => {
  const { cards, firstCard, secondCard, lockedMode, moves } = useSelector(
    (state) => state.game,
  );
  const { currentUser } = useSelector((state) => state.user);
  const [modalVisible, setModalVisible] = useState(false);
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

  const handleRestartGame = () => {
    dispatch(clearGame());
    StartGame();
    setModalVisible(!modalVisible);
  };

  const resetScreen = () => {
    dispatch(clearGame());
  };

  useEffect(() => {
    return () => resetScreen();
  }, []);

  useEffect(() => {
    if (lockedMode) {
      checkMatch(firstCard, secondCard);
    }
  }, [lockedMode]);

  useEffect(() => {
    const allShownedCards = cards.filter((item) => item.shown);

    if (allShownedCards.length === cards.length && moves > 0) {
      dispatch(
        addUserScore({
          id: currentUser.id,
          user: currentUser.user,
          moves,
        }),
      );
      setModalVisible(!modalVisible);
    }
  }, [cards]);

  return (
    <GameView
      cards={cards}
      onPress={handleShownCard}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      restartGame={handleRestartGame}
      moves={moves}
    />
  );
};

export default Game;
