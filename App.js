import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, SafeAreaView } from 'react-native';

const CadastroScreen = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [matricula, setMatricula] = useState('');
  const [curso, setCurso] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }
    // Lógica para envio dos dados
    Alert.alert("Sucesso", "Cadastro realizado!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BlaBlacar</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#ccc"
        value={nomeCompleto}
        onChangeText={setNomeCompleto}
      />
      
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#ccc"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Telefone"     
        placeholderTextColor="#ccc"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Matrícula (RA)"
        placeholderTextColor="#ccc"
        value={matricula}
        onChangeText={setMatricula}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Curso"
        placeholderTextColor="#ccc"
        value={curso}
        onChangeText={setCurso}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#ccc"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#ccc"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />
      
      <Button title="Cadastrar" onPress={handleCadastro} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#12023d', // Azul escuro próximo do roxo
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
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 24,
  },
});

export default CadastroScreen;
