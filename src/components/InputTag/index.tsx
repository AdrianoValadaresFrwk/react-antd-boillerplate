import React, { useState } from 'react';

import { FieldSet, Legend, TagStyled } from './styles';

interface IProps {
  id: string;
  type: string;
  value: any;
  label: string;
  name: string;
  onChange: any;
  onBlur: any;
  multiOption: any;
  onChangeSelect: any;
  select: boolean;
  defaultValue?: any;
  required?: boolean;
}

const InputTag = ({ label, multiOption, ...rest }: IProps) => {
  const [tags, setTags] = useState(multiOption);

  const handleChange = (key) => {
    const newTags = [...tags];
    multiOption.forEach((tag) => {
      if (tag.key === key) {
        tag.visible = false;
      }
    });
    setTags(newTags);
  };

  return (
    <FieldSet>
      <Legend>{label}</Legend>
      {tags
        ?.filter((tag) => tag.visible !== false)
        .map((tag) => {
          return (
            <TagStyled
              key={tag.key}
              closable
              onClose={() => handleChange(tag.key)}
              {...rest}
            >
              {tag.label}
            </TagStyled>
          );
        })}
    </FieldSet>
  );
};

export default InputTag;
