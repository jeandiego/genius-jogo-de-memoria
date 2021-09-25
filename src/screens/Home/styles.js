import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import GlobalContainer from '~/components/Container';
import { IPHONE_X_BOTTOM_SPACE } from '~/config/constants';

export const Container = styled(GlobalContainer)`
  padding: 0;
  justify-content: space-between;
`;

export const ContentWrapper = styled(ScrollView)`
  padding: 16px 8px;
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

export const FooterAction = styled.View`
  padding: 0px 16px;
  padding-bottom: ${IPHONE_X_BOTTOM_SPACE}px;
`;
