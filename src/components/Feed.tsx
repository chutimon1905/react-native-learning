import React from 'react';
import {FlatList, View} from 'react-native';
import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';
import {PostInterface} from '../redux/types';
import {dateTimeToNowString, likeCount} from '../shared/commonHelper';
const userId = '1';

const Container = styled.View`
  flex: 1;
`;
const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;
const User = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #222121;
`;
const Time = styled.Text`
  font-size: 9px;
  color: #747476;
`;
const Caption = styled.Text`
  font-size: 13px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;
const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;
const Footer = styled.View`
  padding: 0 11px;
`;
const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const IconCount = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;
const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;
const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #f9f9f9;
`;
const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const Button = styled.TouchableOpacity`
  flex-direction: row;
`;
const Icon = styled.View`
  margin-right: 6px;
`;
const Text = styled.Text`
  font-size: 13px;
  color: #424040;
`;

const TextClick = styled.Text`
  font-size: 13px;
  color: #1878f3;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 6px;
  background: #d1d1d1;
`;

interface FeedProps {
  posts: PostInterface[];
  onPostLike: (postId: String) => void;
}

const Post: React.FC<PostInterface & {onPostLike: (postId: String) => void}> =
  ({id, datetime, user, img, caption, likes, comments, onPostLike}) => {
    const {avatar, fullname} = user || {};
    const isPostLiked = likes.find((like: String) => like == userId);
    return (
      <>
        <Container>
          <Header>
            <Row>
              <Avatar source={avatar} />
              <View style={{paddingLeft: 10}}>
                <User>{fullname}</User>
                <Row>
                  <Time>{dateTimeToNowString(datetime)}</Time>
                  <Entypo name="dot-single" size={12} color="#747476" />
                  <Entypo name="globe" size={10} color="#747476" />
                </Row>
              </View>
            </Row>

            <Entypo name="dots-three-horizontal" size={15} color="#222121" />
          </Header>

          <Caption>{caption}</Caption>
          <Photo source={img} />

          <Footer>
            <FooterCount>
              <Row>
                <IconCount>
                  <AntDesign name="like1" size={12} color="#FFFFFF" />
                </IconCount>
                <TextCount>{likeCount(likes)} Likes</TextCount>
              </Row>
              <TextCount>{comments.length} comments</TextCount>
            </FooterCount>

            <Separator />

            <FooterMenu>
              <Button onPress={() => onPostLike(id)}>
                <Icon>
                  {isPostLiked ? (
                    <AntDesign name="like1" size={20} color="#1878f3" />
                  ) : (
                    <AntDesign name="like2" size={20} />
                  )}
                </Icon>
                {isPostLiked ? <TextClick>Like</TextClick> : <Text>Like</Text>}
              </Button>

              <Button>
                <Icon>
                  <MaterialCommunityIcons
                    name="comment-outline"
                    size={20}
                    color="#424040"
                  />
                </Icon>
                <Text>Comment</Text>
              </Button>

              <Button>
                <Icon>
                  <MaterialCommunityIcons
                    name="share-outline"
                    size={20}
                    color="#424040"
                  />
                </Icon>
                <Text>Share</Text>
              </Button>
            </FooterMenu>
          </Footer>
          <BottomDivider />
        </Container>
      </>
    );
  };

const Feed: React.FC<FeedProps> = ({posts = [], onPostLike}) => {
  function renderItem({item}: {item: PostInterface}) {
    return <Post {...item} onPostLike={onPostLike} />;
  }

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item: any, index: {toString: () => any}) =>
        index.toString()
      }
    />
  );
};

export default Feed;
