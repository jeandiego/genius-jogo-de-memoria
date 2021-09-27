import styled from 'styled-components/native';
import GlobalContainer from '../Container';

export const Container = styled(GlobalContainer)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.opacity};
  position: absolute;
  z-index: 9;
`;

export const ContentView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CongratsView = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
