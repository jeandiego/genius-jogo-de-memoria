import styled from 'styled-components/native';
import GlobalContainer from '~/components/Container';

export const Container = styled(GlobalContainer)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const CardsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContentView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
