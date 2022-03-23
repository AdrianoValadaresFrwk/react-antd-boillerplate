import PanelTable from './components/Table';
import { MainContainer, Container } from './styles';

const Panel = () => {
  return (
    <MainContainer>
      <Container>
        <PanelTable />
      </Container>
    </MainContainer>
  );
};

export default Panel;
