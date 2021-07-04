import React from 'react';

import styled from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';

const Container = styled.View`
  width: 100%;
  height: 48px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Text = styled.Text`
  color: #1877f2;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Button = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  border-radius: 21px;
  background: #e3e5ea;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

const AppBar = () => {
  return (
    <Container>
      <Text>facebook</Text>
      <Row>
        <Button>
          <Feather name="search" size={22} color="black" />
        </Button>

        <Button>
          <MaterialCommunityIcons name="facebook-messenger" size={22} />
        </Button>
      </Row>
    </Container>
  );
};

export default AppBar;
