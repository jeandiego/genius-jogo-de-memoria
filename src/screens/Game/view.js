import React from 'react';
import PrimaryCard from '~/components/PrimaryCard';
import Header from '~/components/Header';
import { ContentView, CardsWrapper, Container } from './styles';
import FinishedModal from '~/components/FinishedModal';

const GameView = ({ cards, onPress, modalVisible, restartGame }) => {
  return (
    <Container background="primary">
      {modalVisible && <FinishedModal restartGame={restartGame} />}
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
