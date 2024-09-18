import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const BuscarCarona = () => {
  const [localizacaoAtual, setLocalizacaoAtual] = useState('');
  const [destino, setDestino] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [vagasDisponiveis, setVagasDisponiveis] = useState(''); // Renomeado

  const handleBuscar = () => {
    // Lógica para buscar carona
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80} // Ajuste para a posição do teclado
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.innerContainer}>
          <Text style={styles.title}>Oferecer carona</Text>

          <TextInput
            style={styles.input}
            placeholder="Localização atual"
            placeholderTextColor="#ccc"
            value={localizacaoAtual}
            onChangeText={setLocalizacaoAtual}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Destino"
            placeholderTextColor="#ccc"
            value={destino}
            onChangeText={setDestino}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Data (DD/MM/AAAA)"
            placeholderTextColor="#ccc"
            value={data}
            onChangeText={setData}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Horário (HH:MM)"
            placeholderTextColor="#ccc"
            value={horario}
            onChangeText={setHorario}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Vagas disponíveis" // Atualizado
            placeholderTextColor="#ccc"
            value={vagasDisponiveis} // Atualizado
            onChangeText={setVagasDisponiveis} // Atualizado
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={handleBuscar}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>

        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12023d', // Azul escuro próximo do roxo
  },
  innerContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 40,
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#fff', // Cor branca para o texto
  },
  input: {
    color: '#fff',
    margin: 10,
    height: 50,
    borderColor: '#4f0466',
    borderWidth: 4,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 24,    
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff4800',
    borderWidth: 2,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    width: 300,
    alignSelf: 'center', // Centraliza o botão horizontalmente
  },
  buttonText: {
    color: 'white', // Texto branco
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BuscarCarona;
