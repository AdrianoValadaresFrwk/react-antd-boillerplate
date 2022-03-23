import React, { useState } from 'react';

import { FieldSet, Legend, SelectStyled, TagStyled } from './styles';

const { Option } = SelectStyled;

interface IProps {
  label: string;
  option: { id: string; descricao: string }[];
}

const tagStyled = [
  {
    label: 'Nome do modelo',
    visible: true,
    key: 'nome-do-modelo',
  },
  {
    label: 'Modelo do nome',
    visible: true,
    key: 'modelo-do-nome',
  },
];

const InputSelect = ({ label, option }: IProps) => {
  const [tags, setTags] = useState(tagStyled);

  const handleChange = (key) => {
    const newTags = [...tags];
    newTags.forEach((tag) => {
      if (tag.key === key) {
        tag.visible = false;
      }
    });
    setTags(newTags);
  };
  return (
    <FieldSet>
      <Legend>{label}</Legend>
      <SelectStyled defaultValue="Tipo">
        {option?.map((item) => {
          return (
            <Option key={item.id} value={item.id}>
              {item.descricao}
            </Option>
          );
        })}
      </SelectStyled>
      {tags
        .filter((tag) => tag.visible !== false)
        .map((tag) => {
          return (
            <TagStyled
              key={tag.key}
              closable
              onClose={() => handleChange(tag.key)}
            >
              {tag.label}
            </TagStyled>
          );
        })}
    </FieldSet>
  );
};

export default InputSelect;
