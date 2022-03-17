const letsSortTheRainbow = (items, order) => {
  if (items.length === 0 || order.length === 0) return [];

  const itemsHash = {};

  // this loop is O(n)
  for (let i = 0; i < items.length; i++) {
    let currentColor = items[i];
    if (itemsHash[currentColor]) {
      itemsHash[currentColor].push(currentColor);
    } else {
      itemsHash[currentColor] = [currentColor];
    }
  }

  // reducer is O(k)
  return order.reduce((accumulator, item) => {
    if (itemsHash[item]) {
      accumulator.push(...itemsHash[item]);
    }
    return accumulator;
  }, []);
};

module.exports = letsSortTheRainbow;
