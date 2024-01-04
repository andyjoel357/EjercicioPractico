import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
 return (
    <View style={styles.container}>
      <View style={styles.txt}>
        <Text style={styles.message}>Andy Narváez</Text>
      </View>
      <View style={styles.txt}>
        <Text style={styles.message}>Johan Alza</Text>
      </View>
      <View style={styles.txt}>
        <Text style={styles.message}>Fernando Mallitaxi</Text>
      </View>
      <View style={styles.txt}>
        <Text style={styles.message}>Andy Tituaña</Text>
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
 txt: {
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