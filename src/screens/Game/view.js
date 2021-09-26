import React from 'react';
import PrimaryCard from '~/components/PrimaryCard';
import Header from '~/components/Header';
import { ContentView, CardsWrapper, Container } from './styles';

const GameView = ({ cards, onPress }) => {
  return (
    <Container background="primary">
      <Header type="Game" />
      <ContentView>
        <CardsWrapper>
          {cards.map((item) => {
            return (
              <PrimaryCard
                key={item.id}
                item={item}
                isVisible={item.status}
                activeOpacity={0.8}
                onPress={() => onPress(item.id)}
              />
            );
          })}
        </CardsWrapper>
      </ContentView>
    </Container>
  );
};

export default GameView;
