export function buildCard(cards) {
  return cards.map((item) => ({
    image: Object.values(item)[0],
    name: Object.keys(item)[0],
    id: createCardId(Object.keys(item)[0]),
    shown: false,
  }));
}

export function createCardId(card) {
  return card + parseInt(Math.random() * 1000, 10);
}
