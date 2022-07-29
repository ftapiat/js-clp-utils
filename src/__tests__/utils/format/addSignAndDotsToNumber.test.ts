import { addSignAndDotsToNumber } from '@/utils';

test('Agrega signo a un número menor a 1000', () => {
  expect(addSignAndDotsToNumber(1000)).toBe('$1.000');
});

test('Agrega signo y puntos a un número mayor a 999', () => {
  expect(addSignAndDotsToNumber(1000)).toBe('$1.000');
  expect(addSignAndDotsToNumber(1000000)).toBe('$1.000.000');
});

test('Agrega signo y puntos a un float', () => {
  expect(addSignAndDotsToNumber(1000.02)).toBe('$1.000');
});
