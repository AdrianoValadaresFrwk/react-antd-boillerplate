import { CURRENCY_TYPES, LOCALE_TYPES } from '../../const';

export const numberToCurrency = (
  number: number | undefined,
  currencyType: number
) => {
  return number?.toLocaleString(LOCALE_TYPES[currencyType], {
    style: 'currency',
    currency: CURRENCY_TYPES[currencyType],
  });
};
