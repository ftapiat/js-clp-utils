import { addDotsToNumber } from '@/utils';

test('Agrega puntos a un número mayor a 999', () => {
  expect(addDotsToNumber(1000)).toBe('1.000');
  expect(addDotsToNumber(1000000)).toBe('1.000.000');
});

test('Agrega puntos a un float', () => {
  expect(addDotsToNumber(1000.02)).toBe('1.000');
});
