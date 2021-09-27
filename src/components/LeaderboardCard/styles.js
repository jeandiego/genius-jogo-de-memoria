import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  background: ${({ theme }) => theme.colors.primary_light};
  padding: 12px;
  margin: 4px 0;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ScoreWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const RankingView = styled.View`
  background: ${({ theme }) => theme.colors.primary_dark};
  padding: 16px 12px 12px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border-top-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;
