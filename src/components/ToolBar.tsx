import React, {Component} from 'react';
import {Dispatch} from 'redux';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
import {ADD_NEW_POST, ADD_NEW_POST_REQ} from '../redux/types';
import {connect} from 'react-redux';

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

export class ToolBar extends React.Component<IPostAdderProps, any> {
  constructor(props) {
    super(props);
    this.state = {caption: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange = (text: string) => {
    console.log('set state...' + text);

    this.setState({caption: text});
  };
  private handleSubmit = (e: any) => {
    console.log('Add post...');
    const caption = this.state.caption;
    console.log(caption);
    if (caption) {
      this.props.onPress(this.state.caption);
      this.setState({caption: ''});
    }
    e.preventDefault();
  };
  public render() {
    return (
      <>
        <Container>
          <Divider />
          <Row>
            <Avatar source={require('../assets/user1.jpg')} />
            <Input
              placeholder="What's on your mind?"
              value={this.state.caption}
              onChangeText={this.handleChange}
              onSubmitEditing={this.handleSubmit}
            />
          </Row>
          <Row>
            <Show onPress={this.handleSubmit}>
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
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onPress: (caption: string) => dispatch({type: ADD_NEW_POST_REQ, caption}),
});

export default connect(null, mapDispatchToProps)(ToolBar);
