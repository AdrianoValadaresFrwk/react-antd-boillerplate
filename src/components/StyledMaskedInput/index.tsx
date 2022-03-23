import React from 'react';

import { FieldSet, Legend, MaskStyledInput } from './styles';

interface IProps {
  label?: string;
  type?: string;
  name?: string;
  value?: number;
  id?: string;
  required?: boolean;
  onChange?: any;
  onBlur?: any;
  currency: 'BRL' | 'USA' | 'EUR';
}

const StyledMaskedInput = ({
  type,
  label,
  name,
  value,
  id,
  required,
  onChange,
  onBlur,
  currency,
}: IProps) => {
  const currencyConfig = {
    BRL: {
      locale: 'pt-BR',
      formats: {
        number: {
          BRL: {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
        },
      },
    },
    USA: {
      locale: 'en-US',
      formats: {
        number: {
          USA: {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          },
        },
      },
    },
    EUR: {
      locale: 'es-ES',
      formats: {
        number: {
          EUR: {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          },
        },
      },
    },
  };

  return (
    <FieldSet>
      <Legend>{label}</Legend>
      <MaskStyledInput
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        config={currencyConfig[currency]}
        currency={currency}
      />
    </FieldSet>
  );
};

export default StyledMaskedInput;
