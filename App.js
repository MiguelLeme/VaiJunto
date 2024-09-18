import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/login'; 
import CadastroScreen from './screens/cadastro'; 
import Home from './screens/Home';

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
      </Stack.Navigator>
      <Stack.Screen 
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
    </NavigationContainer>
  );
};

export default App;
