import { ClpModel } from '@/models';

test('Lo construye usando un número entero', () => {
  const clp = new ClpModel(1000000);
  expect(clp.value).toBe(1000000);
  expect(clp.formatted).toBe('1.000.000');
  expect(clp.formattedWithSign).toBe('$1.000.000');
});

test('Lo construye usando un número decimal', () => {
  const clp = new ClpModel(100003.99); // trunca el float
  expect(clp.value).toBe(100003);
  expect(clp.formatted).toBe('100.003');
  expect(clp.formattedWithSign).toBe('$100.003');
});

test('Constructor "fromString" genera el valor correcto', () => {
  const clp = ClpModel.fromString('$123.123');
  expect(clp.value).toBe(123123);
  expect(clp.formatted).toBe('123.123');
  expect(clp.formattedWithSign).toBe('$123.123');
});

test('Constructor "fromString" con un string no numérico arroja error', () => {
  expect(() => ClpModel.fromString('abcde')).toThrow(TypeError);
});
