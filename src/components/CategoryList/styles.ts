import styled from 'styled-components/native';

import colors from '../../styles/color';

export const List = styled.ScrollView.attrs({
  horizontal: true
})`
  padding: 8px 0 24px;
`;

export const CategoryContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const CategoryImage = styled.Image`
  width: 98px;
  height: 138px;
`;

export const CategoryName = styled.Text`
  margin-top: 5px;
  color: ${colors.black};
  max-width: 98px;
  font-weight: bold;
  font-size: 13.5px;
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 5px;
  background-color: ${colors.red};
`;

export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${colors.black};
`;
