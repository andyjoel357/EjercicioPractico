import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Welcome( {navigation}:any ) {
  return (
    <View style={styles.container}>
    <ImageBackground 
    source={{ uri: 'https://st2.depositphotos.com/1000423/5535/i/450/depositphotos_55352715-stock-illustration-creative-ideas.jpg '}}
    style={styles.image}
    >
        <Text style={styles.title}>Aplicación para registro de compras</Text>


        <TouchableOpacity onPress={ ()=> navigation.navigate('Tab')  } >
          <Text style={{color:'#fff', fontSize:40}}>Bienvenidos!!</Text>
        </TouchableOpacity>

    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
     },
    image: {
        width: '100%',
        height: '100%',
     },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#34495e',
     },
     txt: {
        width: '100%',
        height: '100%',
     },
})