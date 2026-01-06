import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../components/HomePage';


import Page4 from '../components/Page4';

import Settings from '../components/Settings';

import TaskPageTOInfo from './TaskPageTOInfo';
import { useRoute } from '@react-navigation/native';

import { CredentialsContext } from '../context/contextCredentials';

const Tabs = createBottomTabNavigator();

const screenOpt = {

    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      borderTopWidth: 0, // Remove the top border
      elevation: 0, // Remove shadow on Android
      shadowOpacity: 0, // Remove shadow on iOS
      height: 50,
    },
  
}
const opt1 = {
  
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground
          style={[
            styles.iconBackground,
            {
              shadowColor: focused ? 'aqua' : 'transparent',
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: focused ? 10 : 0,
              shadowOpacity: focused ? 1 : 0,
            },
          ]}
        >
          <Image
            style={[styles.icns, { tintColor: focused ? 'aqua' : 'grey' }]}
            source={require('../assets/icnHome.png')}
          />
        </ImageBackground>
      </View>
    ),
  
  
}

const opt2 = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        style={[
          styles.iconBackground,
          {
            shadowColor: focused ? 'aqua' : 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: focused ? 10 : 0,
            shadowOpacity: focused ? 1 : 0,
          },
        ]}
      >
        <Image
          style={[styles.icns, { tintColor: focused ? 'aqua' : 'grey' }]}
          source={require('../assets/icnTasks.png')}
        />
      </ImageBackground>
    </View>
  ),
}

const opt3 = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        style={[
          styles.iconBackground,
          {
            shadowColor: focused ? 'aqua' : 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: focused ? 10 : 0,
            shadowOpacity: focused ? 1 : 0,
          },
        ]}
      >
        <Image
          style={[styles.icns, { tintColor: focused ? 'aqua' : 'grey' }]}
          source={require('../assets/icnCalender.png')}
        />
      </ImageBackground>
    </View>
  ),
}

const opt4  = {
  tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground
        style={[
          styles.iconBackground,
          {
            shadowColor: focused ? 'aqua' : 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: focused ? 10 : 0,
            shadowOpacity: focused ? 1 : 0,
          },
        ]}
      >
        <Image
          style={[styles.icns, { tintColor: focused ? 'aqua' : 'grey' }]}
          source={require('../assets/icnSettings.png')}
        />
      </ImageBackground>
    </View>
  ),
}

const TabsNavigator = () => {

  const route = useRoute();
  const { email } = route.params;   // use some other method instead of prop drilling
  console.log(email,'Wellcome from Tabs');


  return  (
    <CredentialsContext.Provider value={{email}}>
          <Tabs.Navigator
          screenOptions={screenOpt}
        >
          <Tabs.Screen 
            name="Home" 
            component={HomePage} 
            options={opt1}
            
          />
          <Tabs.Screen 
            name="Tasks" 
            component={TaskPageTOInfo}
            options={opt2}
          />

          <Tabs.Screen 
            name="Calender" 
            component={Page4} 
            options={opt3}
            
          />
          <Tabs.Screen 
            name="Settings" 
            component={Settings} 
            options={opt4}
          />
        </Tabs.Navigator>
      </CredentialsContext.Provider>
  );
}

const styles = StyleSheet.create({
  icns: {
    width: 30,
    height: 30,
  },
});

export default TabsNavigator;
