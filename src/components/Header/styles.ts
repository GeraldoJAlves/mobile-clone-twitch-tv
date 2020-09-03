import styled from 'styled-components/native';

import colors from '../../styles/color';

export const Container = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding-right:14px;
  padding-left: 14px;
  padding-top: 14px;
`;

export const Avatar = styled.TouchableOpacity`
  width:36px;
  height:36px;
  border-radius:16px;
  background-color:${colors.tag};
  border: 2px solid ${colors.primary};
`;

export const OnlineStatus = styled.View`
  width:10px;
  height:10px;
  border-radius:10px;
  background-color:${colors.green};
  border: 2px solid ${colors.primary};
  position:absolute;
  bottom:0;
  right:0;
`;

export const RightSide = styled.View`
  flex-direction:row;
  align-items:center;
`;

export const Button = styled.TouchableOpacity`
  margin-left:20px;
`;
