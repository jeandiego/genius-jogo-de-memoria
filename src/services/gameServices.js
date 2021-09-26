import store from '~/store';
import { setCardsOnScreen } from '~/store/reducers/game';
import { shuffle } from '~/utils/array';
import { buildCard, createCardId } from '~/utils/cards';
import { heroesCard } from './cardsServices';

export function startGame() {
  const cards = buildCard(shuffle(heroesCard));
  const duplicateCards = [...cards, ...cards];

  const shuffledCards = shuffle(duplicateCards);

  store.dispatch(
    setCardsOnScreen(
      shuffledCards.map((item) => ({
        ...item,
        id: createCardId(item.name),
      })),
    ),
  );
}
