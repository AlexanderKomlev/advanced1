import sortByprops from '../app';

test.each([
  [
    {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    },
    ['health', 'name', 'defence', 'level', 'attack'],
    [
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
      { key: 'defence', value: 40 },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
    ],
  ],
  [
    {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    },
    ['level', 'defence'],
    [
      { key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
    ],
  ],
  [
    {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    },
    [],
    [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ],
  ],
])('test sort by props', (obj, order, result) => {
  expect(sortByprops(obj, order)).toEqual(result);
});
