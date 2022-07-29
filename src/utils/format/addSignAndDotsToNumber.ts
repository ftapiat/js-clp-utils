import { addDotsToNumber } from '@/utils';

/**
 * Agrega puntos y signo peso a un número.
 * Si es float, lo truncará.
 *
 * @param number
 */
export const addSignAndDotsToNumber = (number: number) => {
  return `$${addDotsToNumber(number)}`;
};
