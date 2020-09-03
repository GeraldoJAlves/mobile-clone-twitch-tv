import styled from 'styled-components/native';

import colors from '../../styles/color';

export const List = styled.View``;

export const StreamContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const StreamThumbnail = styled.Image`
  width: 100px;
  height: 100px;
`;

export const StreamColumn = styled.View`
  padding-left: 10px;
  justify-content: space-between;
`;

export const StreamRow = styled.View``;

export const StreamHeader = styled.View`
  flex-direction: row;
`;

export const StreamAvatar = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${colors.tag};
`;

export const StreamUserName = styled.Text`
  margin-left: 5px;
  color: ${colors.black};
  font-weight: bold;
`;

export const StreamDescription = styled.Text`
  color: ${colors.black};
`;

export const StreamCategory = styled.Text`
  color: ${colors.black};
`;

export const TagRow = styled.View`
  flex-direction: row
`;

export const TagView = styled.View`
  background-color: ${colors.tag};
  border-radius: 10px;
  padding: 2px 5px;
  margin-right: 5px;
`;

export const TagText = styled.Text`
  color: ${colors.black};
`;
