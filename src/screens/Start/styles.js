import styled from 'styled-components/native';
import { Platform, KeyboardAvoidingView } from 'react-native';

export const KeyboardView = styled(KeyboardAvoidingView).attrs({
  behavior: 'padding',
})`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const IconView = styled.View`
  width: 164px;
  height: 164px;
`;

export const GreetingsView = styled.View`
  width: 100%;
  padding: 48px 0;
  justify-content: center;
  align-items: center;
`;

export const InputView = styled.View`
  width: 100%;
  padding-bottom: 24px;
`;
