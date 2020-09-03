import React from 'react';
import {Text} from 'react-native';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText
} from './styles';

import sourceStreamThumbnail from '../../images/stream_thumbnail.jpg';

const StreamList: React.FC = () => {
  const StreamItem = () => {
    return (
      <StreamContainer>
        <StreamThumbnail source={sourceStreamThumbnail} />
        <StreamColumn>
          <StreamRow>
            <StreamHeader>
              <StreamAvatar />
              <StreamUserName numberOfLines={1}>geraldo_alves</StreamUserName>
            </StreamHeader>
          </StreamRow>
          <StreamDescription>Twitch UI Clone</StreamDescription>
          <StreamCategory>Tecnologia</StreamCategory>
          <TagRow>
            <TagView>
              <TagText>
                Portugues
              </TagText>
            </TagView>
            <TagView>
              <TagText>
                Desenvolvimento
              </TagText>
            </TagView>
          </TagRow>
        </StreamColumn>
      </StreamContainer>
    );
  };

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
