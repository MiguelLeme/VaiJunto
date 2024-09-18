import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/login'; 
import CadastroScreen from './screens/cadastro'; 
import HomeScreen from './screens/home';
import BuscarCarona from './screens/busca';
import OferecerCarona from './screens/oferecer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Cadastro"
          component={CadastroScreen}      
          options={{ headerShown: false }}
        />
      <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Buscar"
          component={BuscarCarona}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Oferecer"
          component={OferecerCarona}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
