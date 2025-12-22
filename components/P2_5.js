import React, { useState, useRef } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Animated, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Ensure this import
import OnBoardingItems from './OnBoardingItems';
import slides from './slides'; // Import the slides array
import Paginator from './Paginator';




function P2_5({navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if(currentIndex < slides.length - 1){
      slidesRef.current.scrollToIndex({index : currentIndex  + 1});
    } else
    {
      navigation.navigate('SignIn')
    }
  }

  return (
    <LinearGradient
      colors={['#05243E', '#1253AA']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnBoardingItems item={item} />}
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />

        <View style={styles.bottom}>
          <Paginator data={slides} scrollX={scrollX} />
          <TouchableOpacity onPress={scrollTo} style={styles.imgContainer}>
            <Image
              source={
                currentIndex === slides.length - 1
                  ? require('../assets/tickBtn.png')// Different image for the last slide
                  : require('../assets/nextBtn.png')
              }
              style={styles.img}
            />
          </TouchableOpacity>
        </View>

        
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1, // Adjusted to make the SafeAreaView fill the available space
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 90,
    height : 90,
    resizeMode: 'contain',
    marginLeft : 20
  
  },
  bottom : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent: 'space-between',
    marginBottom : 30
  }

});

export default P2_5;
