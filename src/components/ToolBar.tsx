import React from 'react';

import styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Avatar from './Avatar';

const Container = styled.View`
  width: 100%;
  height: 92px;
`;
const Row = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;
const Input = styled.TextInput`
  height: 55px;
  width: 100%;
  padding: 0 8px;
`;
const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #e4e6eb;
`;
const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;
const MenuText = styled.Text`
  padding-left: 5px;
  font-weight: 500;
  font-size: 12px;
`;
const Separator = styled.View`
  width: 1px;
  height: 24px;
  background: #e4e6eb;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 6px;
  background: #d1d1d1;
`;

const ToolBar = () => {
  return (
    <>
      <Container>
        <Divider />
        <Row>
          <Avatar source={require('../assets/user1.jpg')} />
          <Input placeholder="What's on your mind?" />
        </Row>
        <Divider />
        <Row>
          <Menu>
            <Ionicons name="videocam" size={22} color="#F44337" />
            <MenuText>Live</MenuText>
          </Menu>
          <Separator />

          <Menu>
            <MaterialIcons
              name="photo-size-select-actual"
              size={20}
              color="#4CAF50"
            />
            <MenuText>Photo</MenuText>
          </Menu>
          <Separator />

          <Menu>
            <MaterialCommunityIcons
              name="video-plus"
              size={22}
              color="#9c6dfb"
            />
            <MenuText>Room</MenuText>
          </Menu>
        </Row>
      </Container>
      <BottomDivider />
    </>
  );
};

export default ToolBar;
