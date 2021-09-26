import React from 'react';
import Logo from '~/assets/svgs/brain.svg';
import { Container, OpacityView } from './styles';

const PrimaryCard = ({ data, ...props }) => {
  return (
    <Container {...props}>
      {data.shown ? (
        <data.image width={86} height={86} />
      ) : (
        <Logo width={52} height={52} fill="white" />
      )}
    </Container>
  );
};

export default PrimaryCard;
