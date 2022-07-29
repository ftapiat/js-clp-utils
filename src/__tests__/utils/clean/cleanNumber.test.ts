import { cleanNumber } from '@/utils';

test('Limpia un número con signo peso', () => {
  expect(cleanNumber('$1000')).toBe(1000);
});

test('Limpia un número con puntos', () => {
  expect(cleanNumber('1.000.000')).toBe(1000000);
});

test('Limpia un número float como string', () => {
  expect(cleanNumber('000.1')).toBe(1);
});

test('Limpia algo que no sea numérico arroja error', () => {
  expect(() => cleanNumber('abcde')).toThrow(TypeError);
});
