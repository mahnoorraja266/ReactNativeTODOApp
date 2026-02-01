import React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import P1 from '../components/P1';
import P2_5 from '../components/P2_5';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


import TabsNavigator from './tabs';

 function NavigationMain() {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name='P1' component={P1} options={{ headerShown: false}} />
        <Stack.Screen name='P2_5' component={P2_5} options={{ headerShown: false}} />
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false}} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false}}/>
        <Stack.Screen name='tabs' component={TabsNavigator} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}


export default NavigationMain;