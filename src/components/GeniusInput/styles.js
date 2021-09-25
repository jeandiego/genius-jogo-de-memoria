import styled from 'styled-components/native';
import { TextInput, Platform } from 'react-native';
import { fonts } from '~/global/styles/fonts';

export const Container = styled(TextInput).attrs((p) => ({
  padding: Platform.OS === 'ios' ? 15 : 10,
  placeholderTextColor: p.theme.colors.primary_dark,
  returnKeyType: 'send',
  textAlign: 'center',
}))`
  width: 100%;
  font-size: 18px;
  font-family: ${(p) => fonts[p.fontFamily] || 'JosefinSans-Regular'};
  border-radius: 8px;
  border-color: ${(p) =>
    p.isFocused ? p.theme.colors.primary_dark : p.theme.colors.primary_light};
  border-width: 2px;
  background-color: ${({ theme }) => theme.colors.primary_light};
  color: ${({ theme }) => theme.colors.white};
`;
