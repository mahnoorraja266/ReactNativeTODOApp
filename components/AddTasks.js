// AddTask.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions, Keyboard, TouchableWithoutFeedback, Image, Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';

import { useState } from 'react';

import Calendar from './Calendar';

function AddTask({ onClose }) {
  const { width } = useWindowDimensions();

  const [calVisible, setCalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

      const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date); // Update selected date state
    };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.overlayContainer}>
        <BlurView intensity={5} style={styles.blurView}>
          <TouchableOpacity style={styles.blurTouch} onPress={onClose} />
        </BlurView>
        <View style={[styles.main, { height: width * 0.5, flex: 0.6 }]}>
          <View style={styles.v1}>
            <View style={[styles.titleBar, { height: width * 0.1, width: width * 0.9 }]}>
                <Image source={require('../assets/icnTitle.png')} style={[styles.icns,{width : width * 0.06, height : width * 0.06, marginTop : 5}]}></Image>
                <TextInput
                    placeholder='Task Title'
                    placeholderTextColor={'white'}
                    style={styles.enterTitle}
                />
            </View>
            <View style={[styles.descBar, { height: width * 0.4, width: width * 0.9 }]}>
                <Image source={require('../assets/icnDesc.png')} style={[styles.icns,{width : width * 0.05, height : width * 0.05, marginTop : 5}]}></Image>
                <TextInput
                    placeholder='Description'
                    placeholderTextColor={'white'}
                    multiline={true}
                    numberOfLines={4}
                    style={[styles.enterDesc,{marginTop : Platform.select({android : -28, ios : 0})}]}
                />
            </View>
          </View>
          <View style={styles.v2}>
            <TouchableOpacity style={[styles.setDate, { width: width * 0.4, height: width * 0.12 }]} onPress={() => setCalVisible(true)}>
                <Image source={require('../assets/icnDate.png')} style={[styles.icns,{width : width * 0.05, height : width * 0.05}]}></Image>
                <Text style={styles.txts}>Date</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.setTime, { width: width * 0.4, height: width * 0.12 }]}>
                <Image source={require('../assets/icnTime.png')} style={[styles.icns,{width : width * 0.05, height : width * 0.05}]}></Image>
                <Text style={styles.txts}>Time</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.v3}>
            <TouchableOpacity
              style={[styles.btns, { backgroundColor: '#ffffff', width: width * 0.4, height: width * 0.12 }]}
              onPress={onClose} // Call onClose when cancel is pressed
            >
              <Text style={[styles.txtBtn, { color: 'black' }]}>cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btns, { backgroundColor: '#0EA5E9', width: width * 0.4, height: width * 0.12 }]}
            >
              <Text style={[styles.txtBtn, { color: 'white' }]}>create</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={calVisible}
            onRequestClose={() => setCalVisible(false)}
        >
            <Calendar visible={calVisible} onClose={() => setCalVisible(false)} selectedDate={selectedDate} // Pass the selected date to Calendar
                    onDateChange={handleDateChange} // Pass the date change handler
 />
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  blurTouch: {
    flex: 1,
  },
  main: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  v1: {
    alignItems: 'center',
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#05243E',
    marginTop: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  descBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#05243E',
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  enterTitle: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 17,
    letterSpacing: 2,
    flex: 1,
    marginLeft: 5,
    color: 'white',
  },
  enterDesc: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 17,
    letterSpacing: 2,
    flex: 1,
    marginLeft: 10,
    color: 'white',
    
  },
  icns : {
    marginLeft : 5,
  
    
    },
  v2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  setDate: {
    backgroundColor: '#05243E',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setTime: {
    backgroundColor: '#05243E',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txts: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 17,
    letterSpacing: 2,
    marginLeft: 10,
    color: 'white',
  },
  v3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  btns: {
    borderColor: '#0EA5E9',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 17,
    letterSpacing: 2,
  },
  
});

export default AddTask;