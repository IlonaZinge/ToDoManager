import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './screens/Login';
import Home from './screens/Home';
import Start from './screens/Start';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name='Start' component={Start} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen name='ToDos' component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

