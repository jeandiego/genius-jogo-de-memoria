import store from '~/store';
import { setCardsOnScreen } from '~/store/reducers/game';
import { shuffle } from '~/utils/array';
import { buildCard, createCardId } from '~/utils/cards';
import { heroesCard } from './cardsServices';

export function StartGame() {
  const cards = buildCard(shuffle(heroesCard));
  const createCardsPair = [...cards, ...cards];

  const shuffledCards = shuffle(createCardsPair);

  store.dispatch(
    setCardsOnScreen(
      shuffledCards.map((item) => ({
        ...item,
        id: createCardId(item.name),
      })),
    ),
  );
}
