import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import Tasks from '../rawDATA/Tasks';
import { useFonts } from 'expo-font';

function CompletedTasks() {
  const { width } = useWindowDimensions();

  const [tasks, setTasks] = useState(Tasks);

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Return null or a loader until fonts are loaded
  }


  const filteredTasks = tasks.filter(task => !task.isComplete);

  return (
    <View style={styles.main}>
      <Text style={styles.incText}>Completed Tasks</Text>
      <ScrollView contentContainerStyle={[styles.scroll, { padding: width * 0.05 }]} showsHorizontalScrollIndicator={false}>
        {filteredTasks.map(task => (
          <View key={task.id} style={[styles.taskContainer, { width: width * 0.95 }]}>
              <TouchableOpacity
                style={[styles.checkCom, { backgroundColor: '#0ea5e9'}]}
                
              >
                <Image style={styles.tickMark} source={require('../assets/tickMark.png')} />
              </TouchableOpacity>

            <View style={styles.tdandt}>
              <Text style={[styles.title, { fontSize: width * 0.045 }]}>{task.title}</Text>
              <View style={styles.dandt}>
                <Text style={[styles.day, { fontSize: width * 0.035 }]}>{task.day} | </Text>
                <Text style={[styles.time, { fontSize: width * 0.035 }]}>{task.time}</Text>
              </View>
            </View>
            <View style={styles.nxt}>
              <Image style={[styles.img, { width: width * 0.05, height: width * 0.06 }]} source={require('../assets/nextVector.png')} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    maxHeight : 180,
    top : 10
    
  },
  scroll: {
    flexGrow: 0, // Ensure the ScrollView shrinks to fit its content
    alignItems: 'center',
  },
  taskContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  checkCom: {
    width: 30,
    height: 30,
    borderRadius: 20, // Circle shape
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  tickMark: {
    width: 20,
    height: 20,
  },
  incText: {
    marginBottom : 5,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
    fontSize: 15,
    color: 'white',
    marginLeft: 12,
    
  },
  nxt: {
    justifyContent: 'center',
  },
  img: {
    // Dimensions will be adjusted dynamically
  },
  tdandt: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
  },
  dandt: {
    flexDirection: 'row',
    marginTop: 5,
  },
  day: {
    color: 'darkgray',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
  },
  time: {
    color: 'gray',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
  },
});



export default CompletedTasks;


