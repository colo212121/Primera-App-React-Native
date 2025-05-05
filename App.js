import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default function App() {
  const [valor, setValor] = useState(0);

  const cambiarValor = () => {
    setValor(valor + 1);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tigre.jpg/1200px-Tigre.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Valor actual: {valor}</Text>

        <Button title="Cambiar Valor" onPress={cambiarValor} color="#d9534f" />

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
  },
});
