import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
 return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Mensaje 1</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Mensaje 2</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Mensaje 3</Text>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
 },
 messageContainer: {
    backgroundColor: '#61DAFB',
    borderRadius: 5,
    padding: 10,
    margin: 5,
 },
 message: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
 },
});

export default App;