import React from 'react';
import Logo from '~/assets/svgs/brain.svg';
import { Container } from './styles';

const PrimaryCard = ({ ...props }) => {
  return (
    <Container {...props}>
      <Logo width={52} height={52} fill="white" />
    </Container>
  );
};

export default PrimaryCard;
