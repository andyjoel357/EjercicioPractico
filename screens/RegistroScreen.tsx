import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

interface RegistroProductoProps {
 agregarProducto: (id: string, objeto: string, precio: number) => void;
}

const RegistroProducto = ({ agregarProducto }: RegistroProductoProps) => {
 const [id, setId] = useState('');
 const [objeto, setObjeto] = useState('');
 const [precio, setPrecio] = useState('');

 const handleAgregarProducto = () => {
    agregarProducto(id, objeto, parseFloat(precio));
    setId('');
    setObjeto('');
    setPrecio('');
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de productos</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Objeto"
        value={objeto}
        onChangeText={setObjeto}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
      />
      <Button title="Agregar producto" onPress={handleAgregarProducto} />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
 },
 input: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
 },
});

export default RegistroProducto;