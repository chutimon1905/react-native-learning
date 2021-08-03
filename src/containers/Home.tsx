import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import AppBar from '../components/AppBar';
import Feed from '../components/Feed';
import Story from '../components/Story';
import ToolBar from '../components/ToolBar';
import Users from '../components/Users';
import {RootState} from '../redux/reducers';

interface Props {}
const Home: React.FC<Props> = props => {
  const posts = useSelector((state: RootState) => state.feed.posts);
  const loading = useSelector((state: RootState) => state.feed.loading);

  console.log('Loading posts...');
  console.log({posts});
  console.log({loading});

  return (
    <>
      <ScrollView>
        <AppBar />
        <ToolBar />
        <Users />
        <Story />
        <Feed posts={posts} isLoading={loading} />
      </ScrollView>
    </>
  );
};

export default Home;
