import React, {useEffect} from 'react';

import {ScrollView} from 'react-native';

import AppBar from '../components/AppBar';
import ToolBar from '../components/ToolBar';
import Users from '../components/Users';
import Story from '../components/Story';
import Feed from '../components/Feed';

import {useSelector, useDispatch, connect} from 'react-redux';
import {RootState} from '../redux/reducers';

interface Props {}
const Home: React.FC<Props> = props => {
  const {posts} = useSelector((state: RootState) => state.feed);
  console.log('Loading posts...');
  console.log({posts});

  return (
    <>
      <ScrollView>
        <AppBar />
        <ToolBar />
        <Users />
        <Story />
        <Feed posts={posts} />
      </ScrollView>
    </>
  );
};

export default Home;
