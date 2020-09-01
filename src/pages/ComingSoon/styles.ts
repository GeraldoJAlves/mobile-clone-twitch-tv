import styled from 'styled-components/native';

import colors from '../../styles/color';

export const Wrapper = styled.View`
  flex:1;
  background-color:${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${colors.purple};
  font-family: 'System';
  font-weight: bold;
  font-size:30px;
`;
