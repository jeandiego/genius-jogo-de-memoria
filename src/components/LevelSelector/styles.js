import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${(p) =>
    p.isChecked ? p.theme.colors.secondary : p.theme.colors.primary_light};
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  margin: 8px;
`;
