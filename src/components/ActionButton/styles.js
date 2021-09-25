import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-bottom-right-radius: 64px;
  border-top-left-radius: 64px;
`;
