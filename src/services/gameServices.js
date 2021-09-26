import store from '~/store';
import { setCards } from '~/store/reducers/game';
import { shuffle } from '~/utils/array';
import { buildCard } from '~/utils/cards';
import { heroesCard } from './cardsServices';

export function startGame() {
  const cards = buildCard(shuffle(heroesCard));
  const duplicateCards = [...cards, ...cards];

  const shuffledCards = shuffle(duplicateCards);

  store.dispatch(
    setCards(
      shuffledCards.map((item, index) => ({
        ...item,
        id: index,
      })),
    ),
  );
}
