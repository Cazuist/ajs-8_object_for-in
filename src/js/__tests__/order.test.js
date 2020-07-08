import orderByProps from '../order';

describe('Начинаем тестирование функции orderByProps()', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const sorted = orderByProps(obj, ['name', 'level']);

  test('Должны получить указанные ключи', () => {
    const expected = [sorted[0].key, sorted[1].key];

    expect(expected).toEqual(['name', 'level']);
  });

  test('Должны получить значения по указанным ключам', () => {
    const expected = [sorted[0].value, sorted[1].value];

    expect(expected).toEqual(['мечник', 2]);
  });

  test('Должны получить отсортированный массив', () => {
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];

    expect(expected).toEqual(sorted);
  });

  test('При пустом массиве ключей сортировки весь массив долже отсортироваться по алфавиту', () => {
    const sortedWithEmpty = orderByProps(obj, []);

    const expected = [
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ];

    expect(expected).toEqual(sortedWithEmpty);
  });
});
