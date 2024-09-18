import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (matricula === '' || senha === '') {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    Alert.alert("Sucesso", "Login realizado!");
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.innerContainer}>
          <Text style={styles.title}>VaiJunto - Login</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Matrícula (RA)"
            placeholderTextColor="#ccc"
            value={matricula}
            onChangeText={setMatricula}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#ccc"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.registerButtonText}>Fazer cadastro</Text>
          </TouchableOpacity>
          
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12023d',
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
    color: '#fff',
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
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'transparent',
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
