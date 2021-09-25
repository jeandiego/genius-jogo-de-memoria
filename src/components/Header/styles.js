import styled from 'styled-components/native';
import { IPHONE_X_BOTTOM_SPACE, IPHONE_X_HEIGHT } from '~/config/constants';

export const Container = styled.View`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.primary_dark};
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  padding: 0 16px;
  padding-bottom: ${IPHONE_X_BOTTOM_SPACE}px;
  padding-top: ${IPHONE_X_HEIGHT + 32}px;
`;

export const ViewWrapper = styled.View`
  flex: 1;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

export const LevelWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
