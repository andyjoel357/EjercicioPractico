
import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function ListaDeComprasScreen({ route, navigation }: any) {
    const { id, objeto, precio } = route.params;
    const [total, setTotal] = useState(Number(precio));
   
    return (
       <View style={styles.container}>
         <Text style={styles.title}>Lista de productos</Text>
         <Text>ID: {id}</Text>
         <Text>Objeto: {objeto}</Text>
         <Text>Precio: {precio}</Text>
         <Text>Total: {total}</Text>
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegistroProductos')}>
           <Text>Agregar otro producto</Text>
         </TouchableOpacity>
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
    title: {
       fontSize: 24,
       marginBottom: 20,
    },
    button: {
       backgroundColor: '#007BFF',
       padding: 10,
       borderRadius: 5,}})