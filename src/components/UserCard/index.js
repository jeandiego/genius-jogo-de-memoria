import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import GeniusText from '../GeniusText';

const Container = styled(TouchableOpacity)`
  background: ${({ theme }) => theme.colors.secondary};
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const UserCard = ({ user, ...rest }) => {
  return (
    <Container {...rest}>
      <GeniusText size={18} fontFamily="bold" color="primary_dark">
        {user}
      </GeniusText>
    </Container>
  );
};

export default UserCard;
