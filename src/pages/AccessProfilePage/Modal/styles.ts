import { Modal, Cascader, Input } from 'antd';
import styled from 'styled-components';

export const ModalComponent = styled(Modal)`
  .ant-modal-body {
    padding: 50px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  margin-right: 10px;
  display: flex;

  &::after {
    content: "*";
    margin-left: 3px;
    color: red;
  }
`

export const InputComponent = styled(Input)`
  width: 80%;
  border: 1px solid black;
`;

export const CascaderComponent = styled(Cascader)`
  margin-top: 20px;
`;