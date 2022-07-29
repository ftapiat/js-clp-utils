import { onlyNumbersRegex } from '@/utils';

/**
 * Limpia un string de caracteres que no sean números y lo retorna como numero.
 * En caso de que el resultado no sea numérico, arroja un TypeError.
 *
 * @param value
 * @throws {TypeError}
 */
export const cleanNumber = (value: string): number => {
  const cleaned = Number.parseFloat(value.replace(onlyNumbersRegex, ''));

  if (Number.isInteger(cleaned)) {
    return cleaned;
  }

  throw new TypeError('El valor no es numérico');
};
