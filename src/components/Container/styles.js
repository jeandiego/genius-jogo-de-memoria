import styled from 'styled-components/native';
import { IPHONE_X_BOTTOM_SPACE, IPHONE_X_HEIGHT } from '~/config/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${(p) =>
    p.theme.colors[p.background] || p.theme.colors.background};
  padding: 0 16px;
  padding-bottom: ${IPHONE_X_BOTTOM_SPACE + 24}px;
  padding-top: ${IPHONE_X_HEIGHT + 24}px;
`;
