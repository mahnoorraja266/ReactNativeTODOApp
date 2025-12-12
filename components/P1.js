import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, Image, Dimensions, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

function P1({navigation}) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('P2_5');
    }, 3000); // 3000ms = 3 seconds

    // Clear timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, [navigation]);


  const [fontLoaded] = useFonts({
    'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf')
  })
  const [displayedText, setDisplayedText] = useState(''); // Text to display with typing effect
  const fullText = 'V 1.1.0'; // Full text to display

  const fadeAnim = useRef(new Animated.Value(0)).current; // Animated value for fade effect
  const typingAnim = useRef(new Animated.Value(0)).current; // Animated value for typing effect

  useEffect(() => {
    // Fade-out effect for txt1
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000, // Duration for fade-out animation
      useNativeDriver: true,
    }).start();

    // Typewriter effect for txt2
    const typeWriterEffect = () => {
      let index = 0;

      // Update text at intervals
      const interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        index += 1;

        // Stop interval when full text is displayed
        if (index > fullText.length) {
          clearInterval(interval);
        }
      }, 150); // Time interval for typing effect
    };

    typeWriterEffect();
  }, [fadeAnim]);

  return (
    <LinearGradient
      colors={['#05243E', '#1253AA']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.grp1}>
          <Image source={require('../assets/Checkmark.png')} style={styles.img} />
          <Animated.Text style={[styles.txt1, { opacity: fadeAnim }]}>Do It</Animated.Text>
        </View>
        <Text style={styles.txt2}>{displayedText}</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  grp1: {
    alignItems: 'center',
    marginBottom: height * 0.4, // Adjust spacing between group and version text
  },
  txt1: {
    fontSize: width * 0.08,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: height * 0.02,
    textAlign: 'center',
    fontFamily : 'Ubuntu-Medium'
  },
  txt2: {
    fontSize: width * 0.04,
    color: '#fff',
    textAlign: 'center',
    marginBottom: height * 0.05,
    fontFamily : 'Ubuntu-Medium'
  },
  img: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'contain',
  },
});

export default P1;
