import styled from 'styled-components/native';

export const HeaderView = styled.View`
  padding: 24px 16px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const ContentView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
`;
