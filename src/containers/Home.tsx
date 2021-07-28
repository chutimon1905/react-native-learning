import React, {useEffect} from 'react';

import {LogBox, ScrollView} from 'react-native';

import AppBar from '../components/AppBar';
import ToolBar from '../components/ToolBar';
import Users from '../components/Users';
import Story from '../components/Story';
import Feed from '../components/Feed';

import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {testData} from '../shared/testData';

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
