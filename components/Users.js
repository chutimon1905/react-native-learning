import React from 'react';

import {ScrollView} from 'react-native';

import styled from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Icon} from 'react-native-gradient-icon';

import Avatar from './Avatar';

const Container = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
`;
const Room = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: #82b1ff;
  padding: 0 15px;
  margin-right: 12px;
`;
const Text = styled.Text`
  color: #1777f2;
  font-size: 12px;
  padding-left: 6px;
  flex: 0.33;
`;
const User = styled.View`
  margin-right: 13px;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #d1d1d1;
`;

const Users = () => {
  return (
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingLeft: 11}}>
          <Room>
            <Icon
              size={26}
              colors={[
                {color: '#7341FC', offset: '0', opacity: '1'},
                {color: '#E141FC', offset: '1', opacity: '1'},
              ]}
              type="material"
              name="videocam"
            />
            <Text>Create Room</Text>
          </Room>
          <User>
            <Avatar source={require('../assets/user1.jpg')} online={true} />
          </User>
          <User>
            <Avatar source={require('../assets/user2.jpg')} online={true} />
          </User>
          <User>
            <Avatar source={require('../assets/user3.jpg')} online={true} />
          </User>
          <User>
            <Avatar source={require('../assets/user4.jpg')} online={true} />
          </User>
          <User>
            <Avatar source={require('../assets/user5.jpg')} online={true} />
          </User>
        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Users;
