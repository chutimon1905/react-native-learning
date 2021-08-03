import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {ADD_NEW_POST_REQ} from '../redux/types';
import Avatar from './Avatar';

const Container = styled.View`
  width: 100%;
  height: 150px;
`;
const Row = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;
const Input = styled.TextInput`
  height: 70px;
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

const Show = styled.TouchableOpacity`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  background-color: #e6f3fe;
  align-items: center;
  justify-content: center;
`;

const TextShow = styled.Text`
  color: #1763cf;
  font-size: 13px;
  font-weight: bold;
`;

interface IPostAdderProps {
  onPress: (caption: string) => any;
}

const ToolBar = () => {
  const [caption, setCaption] = useState('');
  const dispatch = useDispatch();

  const handleChange = (caption: string) => {
    console.log('set state...' + caption);
    setCaption(caption);
  };

  const handleSubmit = () => {
    console.log('Add post...');
    console.log(caption);
    if (caption) {
      dispatch({type: ADD_NEW_POST_REQ, caption});
      setCaption('');
    }
  };
  return (
    <>
      <Container>
        <Divider />
        <Row>
          <Avatar source={require('../assets/user1.jpg')} />
          <Input
            placeholder="What's on your mind?"
            value={caption}
            onChangeText={handleChange}
            onSubmitEditing={handleSubmit}
          />
        </Row>
        <Row>
          <Show onPress={handleSubmit}>
            <TextShow>Post</TextShow>
          </Show>
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
