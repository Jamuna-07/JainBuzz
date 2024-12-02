import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import EventListScreen from '../screens/EventListScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
import CreateEvent from './path/to/CreateEvent';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="EventList" component={EventListScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
