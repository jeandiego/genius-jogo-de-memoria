import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  background-color: ${(p) =>
    p.theme.colors[p.background] || p.theme.colors.primary};
  /* width: 100%; */
  width: ${(p) => p.width || 100}%;
  margin-bottom: ${(p) => p.marginBottom || 0}px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
`;
