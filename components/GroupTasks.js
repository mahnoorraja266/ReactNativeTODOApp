import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Image } from 'react-native';
import grpTasks from '../rawDATA/grpTasks.js';
import { useFonts } from 'expo-font';

function GroupTasks() {
  const { width, height } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Return null or a loader until fonts are loaded
  }

  return (
    <View style = {styles.main}>
          <Text style = {styles.grpText} >Group tasks</Text>
            
            <ScrollView
            horizontal
            contentContainerStyle={[styles.container, { padding: width * 0.005 }]}
            showsHorizontalScrollIndicator={false}
            >
                   
                    {grpTasks.map(task => ( 
                        <View key={task.id} style={[styles.taskContainer, { width: width * 0.75 }]}>    
                        <Text style={[styles.title, { fontSize: width * 0.05 }]}>{task.title}</Text>
                                <View style={styles.dandt}>
                                    <Text style={[styles.day, { fontSize: width * 0.04 }]}>{task.day} | </Text>
                                    <Text style={[styles.time, { fontSize: width * 0.04 }]}>{task.time}</Text>
                                </View>


                                <View style = {styles.ppl}>
                                        {task.people.map(person => (
                                            <View key={person.id} style={styles.each}>
                                                <Image
                                                style={styles.imgs}
                                                source={ person.image }
                                                />
                                            
                                            </View>
                                            ))}
                                            <View style = {styles.addBtn}>
                                                    <Image source={require('../assets/icnAdd.png')} style = {styles.icnAdd }/>
                                            </View>
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
 },
 container: {
   flexGrow: 0, // Ensure the ScrollView shrinks to fit its content
   alignItems: 'center',
 },
   grpText : {
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
    fontSize : 15,
    color : 'white',
    marginLeft : 12,

   

  },
  taskContainer: {
    marginBottom: 0,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 10,
    
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
  time: {
    color: 'gray',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
  },
  day: {
    color: 'darkgray',
    fontFamily: 'Ubuntu-Medium',
    letterSpacing: 1.5,
  },
   ppl: {
    marginRight: 10, // Space between images
    marginTop : 15,
    flexDirection : 'row'
  },
  imgs: {
    width: 40,
    height: 40,
    borderRadius: 30, // Circle shape
  },
  addBtn : {
    backgroundColor : '#D9D9D9',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 10,
    width: 40,
    height: 40,
    // borderColor : 'black',
    // borderWidth : 1,
    borderRadius: 30, // Circle shape
  },
  icnAdd : {
    width : 20,
    height : 20
  }
});

export default GroupTasks;
