import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// { useState } is a hook
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // call the Hook but using useState (text after is the default value)
  // after const, we use array restructuring
  // useState hook works by giving you an array with exactly two elements
  // first element is current state snapshot (starting state or subsequent)
  // second element is a function that allows you to set your state to a new value
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <StatusBar style="auto" />
      <Button title="Change Text" onPress={() => setOutputText('The text changed!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
