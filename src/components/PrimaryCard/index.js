import React from 'react';
import Logo from '~/assets/svgs/brain.svg';
import { Container } from './styles';

const PrimaryCard = ({ data, ...props }) => {
  return (
    <Container {...props}>
      {data.shown ? (
        <data.image width={74} height={74} />
      ) : (
        <Logo width={52} height={52} fill="white" />
      )}
    </Container>
  );
};

export default PrimaryCard;
