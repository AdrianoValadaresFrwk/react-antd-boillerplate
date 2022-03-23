import styled from 'styled-components';

import { Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';

export const Container = styled.div``;

export const Content = styled.div``;

export const ModalStyled: React.FC<ModalProps> = styled(Modal)`
  width: 604px !important;
  .ant-modal-content,
  .ant-modal-header {
    border-radius: 14px;
  }
`;
