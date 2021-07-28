import React from 'react';

import {ScrollView} from 'react-native';

import styled from 'styled-components/native';
import {UserInterface} from '../redux/types';
import {testData} from '../shared/testData';

import Avatar from './Avatar';

const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: column;
  padding: 0 11px;
`;
const Room = styled.TouchableOpacity`
  width: 105px;
  height: 35px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: #e6f3fe;
  justify-content: center;
  margin-right: 10px;
  margin-top: 10px;
`;
const Text = styled.Text`
  color: #1763cf;
  font-size: 13px;
  font-weight: bold;
  padding-left: 1px;
`;
const Title = styled.Text`
  margin-top: 10px;
  color: #050605;
  font-size: 13px;
  font-weight: bold;
  padding-left: 1px;
`;
const User = styled.View`
  margin-top: 8px;
  margin-right: 13px;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 6px;
  background: #d1d1d1;
`;

const Users = () => {
  return (
    <>
      <Container>
        <Title>Audio & Video Rooms</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Room>
            <Text>Create Room</Text>
          </Room>
          {testData.users.map(user => (
            <User key={user.id}>
              <Avatar source={user.avatar} online={true} />
            </User>
          ))}
        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Users;
