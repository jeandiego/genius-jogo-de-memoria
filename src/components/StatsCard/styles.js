import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.textHeading};
  flex: 1;
  margin: 8px;
  border-radius: 8px;
  overflow: hidden;
`;

export const TextWrapper = styled.View`
  padding: 24px 16px;
`;
