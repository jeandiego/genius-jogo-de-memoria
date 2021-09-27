import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import GlobalContainer from '~/components/Container';

export const Container = styled(GlobalContainer)`
  padding: 0;
  justify-content: space-between;
`;

export const ContentWrapper = styled(ScrollView).attrs({
  contentContainer: {
    paddingVertical: 20,
  },
  showsVerticalScrollIndicator: false,
})`
  padding: 0 8px;
`;

export const LevelWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const StatsWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const LeaderboardWrapper = styled.View`
  justify-content: space-between;
`;

export const FooterView = styled.View`
  align-items: center;
  padding: 16px;
`;
