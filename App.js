import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; 

export default function App() {
  const [valor, setValor] = useState(0);

  const cambiarValor = () => {
    setValor(valor + 1); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Valor actual: {valor}</Text>

      <Button title="Cambiar Valor" onPress={cambiarValor} color="red" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 20, 
  },
});
