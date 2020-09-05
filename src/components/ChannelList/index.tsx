import React from 'react';

import {
  List,
  ChannelContainer,
  LeftSide,
  RigthSide,
  Avatar,
  Column,
  Username,
  Info,
  WhiteCircle,
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => {
    return (
      <ChannelContainer>
        <LeftSide>
          <Avatar />
          <Column>
            <Username>rocketseat</Username>
            <Info>2 new videos</Info>
          </Column>
        </LeftSide>
        <RigthSide>
          <WhiteCircle />
        </RigthSide>
      </ChannelContainer>
    );
  };

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
