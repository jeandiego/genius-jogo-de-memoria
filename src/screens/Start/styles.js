import styled from 'styled-components/native';
import { Platform, KeyboardAvoidingView } from 'react-native';
import { IPHONE_X_BOTTOM_SPACE, IPHONE_X_HEIGHT } from '~/config/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 16px;
  padding-bottom: ${IPHONE_X_BOTTOM_SPACE}px;
  padding-top: ${IPHONE_X_HEIGHT + 24}px;
  justify-content: space-between;
  align-items: center;
`;

export const KeyboardView = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const IconView = styled.View`
  width: 164px;
  height: 164px;
  border-radius: 200px;
  background-color: white;
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
