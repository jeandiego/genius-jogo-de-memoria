export function buildCard(cards) {
  return cards.map((item, index) => ({
    image: item,
    status: 'hidden',
    id: index,
  }));
}
