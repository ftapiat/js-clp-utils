/**
 * Agrega puntos a un número.
 * Si es float, lo truncará.
 *
 * @param number
 */
export const addDotsToNumber = (number: number) => {
  return Math.trunc(number)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
