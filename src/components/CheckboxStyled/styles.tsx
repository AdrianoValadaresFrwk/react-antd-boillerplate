import styled from 'styled-components';
import { Checkbox } from 'antd';
import { CheckboxProps } from 'antd/lib/checkbox';

export const StyledCheckbox: React.FC<CheckboxProps> = styled(Checkbox)`
  width: 100%;
  font-size: 13px;
`;
