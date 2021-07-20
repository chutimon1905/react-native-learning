import React, {useEffect} from 'react';

import {ScrollView} from 'react-native';

import AppBar from '../components/AppBar';
import ToolBar from '../components/ToolBar';
import Users from '../components/Users';
import Story from '../components/Story';
import Feed from '../components/Feed';

import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/reducers';
import {likePost, updateFeed} from '../redux';
const userId = '1'; // id of logged user (should ideally be retreived from server and saved in localstorage/redux)

interface Props {}
export const Home: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const {posts} = useSelector((state: RootState) => state.feed);
  console.log({posts});

  function onPostLike(postId: String) {
    dispatch(likePost({postId, userId}));
  }

  useEffect(() => {
    dispatch(updateFeed());
  }, []);

  return (
    <>
      <ScrollView>
        <AppBar />
        <ToolBar />
        <Users />
        <Story />
        <Feed posts={posts} onPostLike={onPostLike} />
      </ScrollView>
    </>
  );
};

export default Home;
