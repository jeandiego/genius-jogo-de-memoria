import React from 'react';
import PrimaryCard from '~/components/PrimaryCard';
import Header from '~/components/Header';
import { ContentView, CardsWrapper, Container } from './styles';
import EndGameModal from '~/components/EndGameModal';

const GameView = ({ cards, moves, onPress, modalVisible, restartGame }) => {
  return (
    <Container background="primary">
      {modalVisible && <EndGameModal restartGame={restartGame} moves={moves} />}
      <Header type="Game" />
      <ContentView>
        <CardsWrapper>
          {cards.map((item) => {
            return (
              <PrimaryCard
                key={item.id}
                data={item}
                activeOpacity={item.shown ? 1 : 0.8}
                onPress={() => {
                  item.shown || onPress(item.id);
                }}
              />
            );
          })}
        </CardsWrapper>
      </ContentView>
    </Container>
  );
};

export default GameView;
