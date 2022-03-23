import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';
import { BREADCRUMB_NAME_MAP } from './const';

const Bread = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{BREADCRUMB_NAME_MAP[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/painel">Página inicial</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <Container>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </Container>
  );
};

export default Bread;
