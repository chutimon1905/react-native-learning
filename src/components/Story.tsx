import React from 'react';

import {ScrollView} from 'react-native';

import styled from 'styled-components/native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Avatar from './Avatar';
import {testData} from '../shared/testData';

const Container = styled.View`
  width: 100%;
  height: 196px;
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
  height: 175px;
  position: relative;
  margin-right: 6px;
`;
const CardStory = styled.Image`
  width: 100%;
  height: 175px;
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
            {testData.stories.map(story => (
              <Card key={story.id}>
                <CardStory source={story.img} />
                <CardUser>
                  <Avatar source={story.user.avatar} story={true} />
                </CardUser>
                <CardFooter>
                  <Text>{story.user.username}</Text>
                </CardFooter>
              </Card>
            ))}
          </ScrollView>
        </Row>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Story;
