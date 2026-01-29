import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-modern-datepicker'; // Assuming DatePicker is a default export
import { getToday, getFormatedDate } from 'react-native-modern-datepicker'; // Named exports
import { BlurView } from 'expo-blur';

// Your component code follows...


function Calendar({ visible, onClose, selectedDate, onDateChange }) {
    // Store the selected date as a string initially
    const [date, setDate] = useState('');

    const handleChange = (selectedDate) => {
        // No need to convert to a Date object immediately; just store the string
        setDate(selectedDate);
    };

    const today = new Date();
    
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1, 'YYYY/MM/DD'))

    // console.log(date); // This will print the date in 'YYYY-MM-DD' format
    // console.log(DatePicker, getToday, getFormatedDate);

    return (
        visible && (
            <View style={styles.main}>
                <BlurView intensity={5} style={styles.blurView}>
                    <TouchableOpacity style={styles.blurTouch} onPress={onClose} />
                </BlurView> 
                <View style={styles.cal}>
                <DatePicker
                                mode='calendar'
                                minimumDate={startDate}
                                selected={selectedDate} // Use selectedDate from props
                                onDateChange={onDateChange} 
                            options={{
                                backgroundColor: '#05243E', // White background
                                textHeaderColor: 'white', // date top month and year
                                textDefaultColor: 'white', // dates digits
                                selectedTextColor: '#ffffff', // White text for selected date
                                mainColor: '#17A1FA', // Light blue for primary elements
                                borderColor: '#17A1FA', // Light blue borders
                                textSecondaryColor: 'white', // Red for secondary text
                                textHeaderFontSize: 20, // Font size of header text
                                textDefaultFontSize: 18, // Font size for default text
                                borderRadius: 10, // Rounded corners
                                weekdayColor: '#17A1FA', // Darker grey for weekdays
                                selectedTextBackgroundColor: 'grey', // Light blue background for selected date
                            }}
                        />
                </View>
            </View>
        )
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
    },
    blurTouch: {
        flex: 1,
    },
    cal: {
        backgroundColor: 'white',
        borderRadius: 0,
        padding: 20,
    },
});

export default Calendar;
