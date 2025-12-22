import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts} from 'expo-font';



function OnBoardingItems({ item }) {
  const { width, height } = useWindowDimensions(); // Get dynamic dimensions

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });



  return (
      <View style={[styles.container, { width }]}>
        <Image source={item.image} style={[styles.image, { width: width * 0.6, height: width * 0.7 }]} />
        <View style={{ flex: 0.6 }}>
          <Text style={[styles.text, { paddingHorizontal: width * 0.16, fontSize: width * 0.05 }]}>{item.text}</Text>
        </View>
      </View>
     
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    resizeMode: 'contain', // Ensure this is applied
  },
  text: {
    fontFamily: 'Ubuntu-Medium',

    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
  },
});

export default OnBoardingItems;

    
