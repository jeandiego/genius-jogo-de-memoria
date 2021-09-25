import React from 'react';
import styled from 'styled-components/native';
import { fonts } from '~/global/styles/fonts';

export const Text = styled.Text`
  font-family: ${(p) => p.fontFamily || 'JosefinSans-Regular'};
  font-family: ${(p) => fonts[p.fontFamily] || 'JosefinSans-Regular'};
  font-size: ${(p) => p.size || 16}px;
  color: ${(p) => p.theme.colors[p.color] || p.theme.colors.primary};
  padding-left: ${(p) => p.pLeft || 0}px;
  padding-right: ${(p) => p.pRight || 0}px;
  margin-right: ${(p) => p.mRight || 0}px;
  margin-left: ${(p) => p.mLeft || 0}px;
  padding-bottom: ${(p) => p.pBottom || 0}px;
  text-align: ${(p) => p.align || 'left'};
`;

const GeniusText = ({ ...props }) => {
  return <Text {...props} />;
};

export default GeniusText;
