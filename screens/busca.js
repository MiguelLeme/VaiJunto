import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Modal, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment'; // Importa a biblioteca moment.js para formatação de data

const BuscarCarona = () => {
  const [localizacaoAtual, setLocalizacaoAtual] = useState('');
  const [destino, setDestino] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [vagasDisponiveis, setVagasDisponiveis] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const options = ['1 pessoa', '2 pessoas', '3 pessoas', '4 pessoas'];

  const handleBuscar = () => {
    // Lógica para buscar carona
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const handleOptionSelect = (option) => {
    setVagasDisponiveis(option);
    toggleModal();
  };

  const handleDateSelect = (day) => {
    const formattedDate = moment(day.dateString).format('DD/MM/YYYY');
    setData(formattedDate);
    toggleCalendar();
  };

  const today = moment().format('YYYY-MM-DD'); // Formato 'YYYY-MM-DD'

  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
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
          
          <TouchableOpacity style={styles.input} onPress={toggleCalendar}>
            <Text style={styles.placeholderText}>{data || 'Data'}</Text>
          </TouchableOpacity>
          
          <TextInput
            style={styles.input}
            placeholder="Horário"
            placeholderTextColor="#ccc"
            value={horario}
            onChangeText={setHorario}
          />
          
          <TouchableOpacity style={styles.pickerContainer} onPress={toggleModal}>
            <Text style={styles.pickerLabel}>{vagasDisponiveis || 'Vagas disponíveis'}</Text>
          </TouchableOpacity>

          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={toggleModal}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContent}>
                <FlatList
                  data={options}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.option}
                      onPress={() => handleOptionSelect(item)}
                    >
                      <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                />
              </View>
            </View>
          </Modal>

          <Modal
            visible={isCalendarVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={toggleCalendar}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContent}>
                <Calendar
                  current={today}
                  minDate={today}
                  onDayPress={handleDateSelect}
                  theme={{
                    todayTextColor: '#ff4800',
                    arrowColor: '#ff4800',
                    monthTextColor: '#fff',
                    textDayFontWeight: 'bold',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: 'bold',
                    textDayColor: '#fff',
                    textMonthColor: '#fff',
                    textDayHeaderFontSize: 16,
                    textMonthFontSize: 18,
                    textDayFontSize: 16,
                    backgroundColor: '#12023d',
                    calendarBackground: '#12023d',
                  }}
                />
              </View>
            </View>
          </Modal>

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
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickerContainer: {
    margin: 10,
    borderColor: '#4f0466',
    borderWidth: 4,
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    backgroundColor: '#12023d',
  },
  pickerLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#12023d',
    borderRadius: 10,
    width: '80%',
    padding: 20,
    alignItems: 'center',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
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
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BuscarCarona;
