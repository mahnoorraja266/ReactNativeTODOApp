import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { LinearGradient } from 'expo-linear-gradient';

import slides from '../components/slides';

const { width, height } = Dimensions.get('window');

function P2_P5() {

  return (
    <LinearGradient
      colors={['#05243E', '#1253AA']}
      style={styles.gradient}
    >
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
      },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    width : '60%',
    color : 'white'
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  activeDotStyle: {
    backgroundColor: '#000',
  },
});

export default P2_P5;
