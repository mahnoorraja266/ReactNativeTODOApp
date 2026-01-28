import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, useWindowDimensions, Keyboard,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Corrected the import for LinearGradient
import { Calendar } from 'react-native-calendars';
import { useFonts } from 'expo-font';

function CalPage() {
    const { width } = useWindowDimensions();
    const [selected, setSelected] = useState('');

    const [fontsLoaded] = useFonts({
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf')
    })

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient
                colors={[ '#1253AA', '#05243E']}
                style={styles.gradient}
            >
                <SafeAreaView style={styles.safeAreaView}>
                    <View style = {styles.main}> 
                        <View style={[styles.v1, { height: width * 0.2, top: width * 0.05 }]}>
                                <Text style={styles.txt1}>Manage Your Time</Text>
                        </View>

                        <View style={styles.calendar}>
                            <Calendar
                                style={[styles.calendarStyle, { width: width * 0.95, height: width * 0.85 }]}
                                onDayPress={day => {
                                    setSelected(day.dateString);
                                    console.log('Selected day:', day);
                                }}
                                markedDates={{
                                    [selected]: { selected: true, selectedDotColor: 'orange' }
                                }}
                            />
                    </View>

                    <View style={[styles.v2, {width : width * 0.95,  height : width * 0.27}]}>
                        <View style={styles.setTask}>
                            <Text style={styles.txt2}>Set Task for {selected}</Text>
                        </View>
                      <View style = {styles.inputandBtn}>
                            <TextInput
                                placeholder='Task Name'
                                style={[styles.txtInput, {width : width * 0.59, paddingVertical : width * 0.025}]}
                                placeholderTextColor={'white'}
                            />
                            <Pressable style={[styles.btn, {width : width * 0.27, paddingVertical : width * 0.025}]}>
                                <Text style={styles.txt3}>Add Task</Text>
                            </Pressable>
                      </View>
                    </View>

                    </View>
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    safeAreaView : {
        flex: 1, // Adjusted to make the SafeAreaView fill the available space
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 1,
        padding: 20,
        alignItems : 'center'
       
    },
    v1: {
        alignItems: 'center',
        marginBottom: 20,
    },
    txt1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily : 'Ubuntu-Medium'
    },
    calendar: {
        marginBottom: 20,
    },
    calendarStyle: {
        borderWidth: 1,
        borderRadius: 10,
       // backgroundColor : 'transparent'
    },
    v2: {
        paddingHorizontal: 10,
        backgroundColor : "white",
        justifyContent : 'center',
        borderRadius : 10
    },
    setTask: {
        marginTop : 10,
        marginBottom: 15,
    },
    txt2: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginLeft : 3
    },
    txtInput: {
        backgroundColor: '#05243E',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
    },
    btn: {
        backgroundColor: '#0EA5E9',
        borderRadius: 8,
        alignItems: 'center',
    },
    txt3: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    inputandBtn : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'flex-start'

    }
});

export default CalPage;
