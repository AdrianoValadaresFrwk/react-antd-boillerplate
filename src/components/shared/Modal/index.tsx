import React from 'react';
import { useModal } from '../../../contexts/Modal';

import { ModalStyled, Container, Content } from './styles';

interface IProps {
  title: string;
  Footer?: JSX.Element;
}

const SharedModal: React.FC<IProps> = ({ title, Footer, children }) => {
  const { handleCancel, isModalVisible, modalType } = useModal();

  return (
    <Container>
      <ModalStyled
        title={title}
        visible={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={Footer ? [Footer] : false}
      >
        <Content key={modalType}>{children}</Content>
      </ModalStyled>
    </Container>
  );
};

export default SharedModal;
