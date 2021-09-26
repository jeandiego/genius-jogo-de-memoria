import React from 'react';
import Logo from '~/assets/svgs/brain.svg';
import { Container } from './styles';

const PrimaryCard = ({ item, ...props }) => {
  // console.tron.log(item);

  return (
    <Container {...props}>
      {item.status === 'shown' ? (
        <item.image width={86} height={86} />
      ) : (
        <Logo width={52} height={52} fill="white" />
      )}

      {/* {isShown && <item.image width={52} height={52} />} */}
    </Container>
  );
};

export default PrimaryCard;
