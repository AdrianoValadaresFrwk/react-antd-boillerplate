import styled from 'styled-components';
import { Tag } from 'antd';
import { TagProps } from 'antd/lib/tag';

export const TagStyled: React.FC<TagProps> = styled(Tag)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  border: none;
  border-radius: 15.5px;
  color: #006c4f;
  font-weight: bold;
  background-color: #f0f6f5;
  margin-left: 15px;
  .anticon {
    display: flex;
    background: #006c4f;
    color: #fff;
    padding: 2px;
    border-radius: 10px;
  }
`;

export const FieldSet = styled.fieldset`
  display: flex;
  height: 60px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  margin-bottom: 20px;
`;

export const Legend = styled.legend`
  width: auto;
  margin-left: 16px;
  padding: 0 4px 0;
  color: #828282;
  font-size: 12px;
`;
