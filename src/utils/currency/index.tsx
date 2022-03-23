import { CURRENCY_TYPES, LOCALE_TYPES } from '../const';

export const numberToReal = (number: number | undefined) => {
  return number?.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const numberToCurrency = (
  number: number | undefined,
  currency: number
) => {
  return number?.toLocaleString(LOCALE_TYPES[currency], {
    style: 'currency',
    currency: CURRENCY_TYPES[currency],
  });
};
