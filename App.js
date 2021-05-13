import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

const TextInputApp = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        textAlign={'center'}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="input number..."
        keyboardType="numeric"
      />
      <Text style={styles.center}>{number}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 70,
    margin: 30,
    fontSize: 30,
    borderWidth: 3,
  },
  center: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default TextInputApp;
