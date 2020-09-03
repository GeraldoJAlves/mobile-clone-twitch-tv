import styled from 'styled-components/native';

import colors from '../../styles/color';

export const List = styled.ScrollView.attrs({
  horizontal: true
})`
  flex-direction: row;
`;

export const CategoryContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 100px;
  height: 180px;
`;

export const CategoryImage = styled.Image`
  width: 100px;
  height: 150px;
`;

export const CategoryName = styled.Text`
  color: ${colors.black};
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RedCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${colors.red};
`;

export const Info = styled.Text`
  padding-left: 5px;
  color: ${colors.black};
`;
