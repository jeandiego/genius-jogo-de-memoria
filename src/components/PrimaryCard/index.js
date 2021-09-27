import React from 'react';
import Logo from '~/assets/svgs/layers.svg';
import { Container } from './styles';

const PrimaryCard = ({ data, ...props }) => {
  return (
    <Container {...props}>
      {data.shown ? (
        <data.image width={74} height={74} />
      ) : (
        <Logo width={42} height={42} fill="white" />
      )}
    </Container>
  );
};

export default PrimaryCard;
