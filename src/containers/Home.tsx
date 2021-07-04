import React from 'react';

import {ScrollView} from 'react-native';

import AppBar from '../components/AppBar';
import ToolBar from '../components/ToolBar';
import Users from '../components/Users';
import Story from '../components/Story';
import Feed from '../components/Feed';

const Home = () => {
  return (
    <>
      <ScrollView>
        <AppBar />
        <ToolBar />
        <Users />
        <Story />
        <Feed />
      </ScrollView>
    </>
  );
};

export default Home;
