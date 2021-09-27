import styled from 'styled-components/native';
import { TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width / 5;
const windowHeight = Dimensions.get('window').height / 12;

export const Container = styled(TouchableOpacity)`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  background: ${(p) => p.theme.colors.primary_dark};
  border-radius: 8px;
  margin: 4px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
