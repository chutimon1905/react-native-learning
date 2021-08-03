import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {LIKE_POST, PostInterface} from '../redux/types';
import {dateTimeToNowString, likeCount} from '../shared/commonHelper';
import Avatar from './Avatar';

const Container = styled.View`
  flex: 1;
`;

const Loading = styled.View`
  margin-top: 20px;
  align-items: center;
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

const TextLoading = styled.Text`
  font-size: 13px;
  text-align: center;
  color: #a9a9a9;
`;

interface IFeedProps {
  posts: PostInterface[];
  isLoading: boolean;
}

export const Post: React.FC<PostInterface> = ({
  id,
  datetime,
  user,
  img,
  imgUri,
  caption,
  likes,
  comments,
  isLiked,
}) => {
  const dispatch = useDispatch();

  function onPostLike(postId: number) {
    dispatch({type: LIKE_POST, payload: postId});
  }
  const {avatar, fullname} = user || {};
  var isHaveImg: boolean = false;
  if (img) isHaveImg = true;
  return (
    <>
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
      {isHaveImg ? <Photo source={img} /> : <Photo source={{uri: imgUri}} />}

      <Footer>
        <FooterCount>
          <Row>
            <IconCount>
              <AntDesign name="like1" size={12} color="#FFFFFF" />
            </IconCount>
            <TextCount>{likeCount(likes)} Likes</TextCount>
          </Row>
          <TextCount>{comments?.length || 0} Comments</TextCount>
        </FooterCount>

        <Separator />

        <FooterMenu>
          <Button onPress={() => onPostLike(id)}>
            <Icon>
              {isLiked ? (
                <AntDesign name="like1" size={20} color="#1878f3" />
              ) : (
                <AntDesign name="like2" size={20} />
              )}
            </Icon>
            {isLiked ? <TextClick>Like</TextClick> : <Text>Like</Text>}
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
    </>
  );
};

const Feed: React.FC<IFeedProps> = ({posts = [], isLoading}) => {
  return isLoading ? (
    <Loading>
      <ActivityIndicator size="large" />
      <TextLoading>Loading...</TextLoading>
    </Loading>
  ) : (
    <>
      {posts.map(post => (
        <Container key={post.id}>
          <Post {...post} />
        </Container>
      ))}
    </>
    // Flatlist bring the error because FlatList run inside ScrollView on home component(ScrollView and FlatList share the same logic )so it's duplicated
    // function renderItem({item}: {item: PostInterface}) {
    //   return <Post {...item} />;
    // }
    // return <FlatList
    //   data={posts}
    //   renderItem={renderItem}
    //   keyExtractor={(item: any, index: {toString: () => any}) =>
    //     index.toString()
    //   }
    // />
  );
};

export default Feed;
