import styled from 'styled-components/native';

export const HeaderView = styled.View`
  padding: 24px 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const ContentView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
`;

export const FooterView = styled(ContentView)``;
