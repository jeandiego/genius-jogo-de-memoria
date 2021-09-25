import styled from 'styled-components/native';
import { TextInput, Platform } from 'react-native';

export const Container = styled(TextInput).attrs((p) => ({
  padding: Platform.OS === 'ios' ? 15 : 10,
  placeholderTextColor: p.theme.colors.primary,
  returnKeyType: 'send',
  textAlign: 'center',
}))`
  width: 100%;
  font-size: 18px;
  border-radius: 8px;
  border-color: ${(p) =>
    p.isFocused ? p.theme.colors.primary_light : p.theme.colors.primary_dark};
  border-width: 2px;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  color: ${({ theme }) => theme.colors.white};
`;
