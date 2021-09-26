import styled from 'styled-components/native';
import { TouchableOpacity, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled(TouchableOpacity)`
  width: ${windowWidth / 5}px;
  height: ${windowHeight / 12}px;
  /* width: 86px;
  height: 86px; */
  background: ${(p) => p.theme.colors.primary_dark};
  border-radius: 8px;
  margin: 4px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
