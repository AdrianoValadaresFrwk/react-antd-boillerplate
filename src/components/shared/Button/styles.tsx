import styled from 'styled-components';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

export const ButtonStyled: React.FC<ButtonProps> = styled(Button)`
  height: 40px;
  border-radius: 21px;
  padding: 0 35px;
  background: #006c4f;
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
`;

export const ButtonStyledSecondary: React.FC<ButtonProps> = styled(
  ButtonStyled
)`
  background: #006c4f12;
  color: #006c4f;
  border: none;
  &:hover {
    outline: 1px solid #147d7b;
  }
`;

export const ButtonStyledThirdary: React.FC<ButtonProps> = styled(
  ButtonStyledSecondary
)`
  margin: 0;
  align-items: center;
  background: #fff;
  border: 1px solid #147d7b;
`;
