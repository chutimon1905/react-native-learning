import React from 'react';

import {ScrollView} from 'react-native';

import styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Avatar from './Avatar';

const Container = styled.View`
  width: 100%;
  height: 248px;
  padding: 0 11px;
`;

const Row = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

const Card = styled.View`
  width: 104px;
  height: 183px;
  position: relative;
  margin-right: 6px;
`;
const CardStory = styled.Image`
  width: 100%;
  height: 183px;
  border-radius: 12px;
`;
const CardUser = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ffffff;
  border-radius: 20px;
  width: 39px;
  height: 39px;
  align-items: center;
  justify-content: center;
`;
const CardFooter = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  left: 9px;
`;
const Text = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
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

const BottomDivider = styled.View`
  width: 100%;
  height: 6px;
  background: #d1d1d1;
`;

const Story = () => {
  return (
    <>
      <Container>
        <Row>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card>
              <CardStory source={require('../assets/story1.jpg')} />
              <CardUser>
                <AntDesign name="plus" size={24} color="#1777f2" />
              </CardUser>
              <CardFooter>
                <Text>Add To Story</Text>
              </CardFooter>
            </Card>

            <Card>
              <CardStory source={require('../assets/story2.jpg')} />
              <CardUser>
                <Avatar source={require('../assets/user2.jpg')} story={true} />
              </CardUser>
              <CardFooter>
                <Text>Lisa M.</Text>
              </CardFooter>
            </Card>

            <Card>
              <CardStory source={require('../assets/story3.jpg')} />
              <CardUser>
                <Avatar source={require('../assets/user3.jpg')} story={true} />
              </CardUser>
              <CardFooter>
                <Text>Anna O.</Text>
              </CardFooter>
            </Card>

            <Card>
              <CardStory source={require('../assets/story4.jpg')} />
              <CardUser>
                <Avatar source={require('../assets/user4.jpg')} story={true} />
              </CardUser>
              <CardFooter>
                <Text>Adam L.</Text>
              </CardFooter>
            </Card>
          </ScrollView>
        </Row>
        <Row>
          <Show>
            <TextShow>Show More</TextShow>
          </Show>
        </Row>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Story;
