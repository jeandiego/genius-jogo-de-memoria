import styled from 'styled-components/native';
import { IPHONE_X_HEIGHT } from '~/config/constants';

export const Container = styled.View`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.primary_dark};
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
  padding: 16px 16px;
  padding-top: ${IPHONE_X_HEIGHT + 8}px;
`;

export const ViewWrapper = styled.View`
  flex: 1;
  padding: 16px 0;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

export const LineWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ColumnWrapper = styled.View`
  flex: 1;
  background-color: ${(p) =>
    p.theme.colors[p.background] || p.theme.colors.secondary};
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  border-radius: 8px;
`;
