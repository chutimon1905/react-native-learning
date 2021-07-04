import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import Home from './src/containers/Home';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Container>
        <Home />
      </Container>
    </Provider>
  );
};

export default App;
