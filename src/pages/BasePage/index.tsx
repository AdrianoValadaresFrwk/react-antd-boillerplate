import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import ModalContainer from '../../components/ModalContainer';
import { MainContainer, Container, Content } from './styles';

const BasePage = () => {
  return (
    <MainContainer>
      <ModalContainer />
      <Header />
      <Container>
        <Menu />
        <Content>
          <Suspense fallback={<div />}>
            <Outlet />
          </Suspense>
        </Content>
      </Container>
    </MainContainer>
  );
};

export default BasePage;
