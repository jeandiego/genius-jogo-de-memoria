import React from 'react';
import PrimaryCard from '~/components/PrimaryCard';
import Header from '~/components/Header';
import { ContentView, CardsWrapper, Container } from './styles';

const GameView = ({ cards }) => {
  return (
    <Container background="primary">
      <Header type="Game" />
      <ContentView>
        <CardsWrapper>
          {cards.map(() => (
            <PrimaryCard activeOpacity={0.8} />
          ))}
        </CardsWrapper>
      </ContentView>
    </Container>
  );
};

export default GameView;
