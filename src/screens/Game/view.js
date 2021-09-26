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
                data={item}
                isVisible={item.status}
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
