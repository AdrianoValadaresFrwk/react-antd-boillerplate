import React, { ReactElement } from 'react';

import { Container, Text } from './styles';

interface IProps {
  label: string;
}

const Notification = ({ label }: IProps): ReactElement<HTMLElement> => {
  return (
    <Container>
      <Text>{label}</Text>
    </Container>
  );
};

export default Notification;
