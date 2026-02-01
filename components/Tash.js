import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, TextInput, Keyboard, TouchableWithoutFeedback, useWindowDimensions, TouchableOpacity, Modal, View, StyleSheet, Image, Text } from 'react-native';

import TodayTasks from '../rawDATA/TodayTasks';
import { useFonts } from 'expo-font';

function Tash() {
    const { width } = useWindowDimensions();
    const [fontsLoaded] = useFonts({
        'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf')
    });

    const [sortOptionsVisible, setSortOptionsVisible] = useState(false);
    const [sortBy, setSortBy] = useState('Sort by:');

    const [sortedTasks, setSortedTasks] = useState(TodayTasks);

    const handleSortOptionSelect = (option) => {
        setSortBy(option);
        setSortOptionsVisible(false);

        const sorted = [...TodayTasks].sort((a, b) => {
            switch (option) {
                case 'Title':
                    return a.title.localeCompare(b.title);
                case 'Time':
                    return a.time.localeCompare(b.time);
                default:
                    return 0;
            }
        });

        setSortedTasks(sorted);
    };

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={['#1253AA', '#05243E']} style={styles.gradient}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={[styles.main, { top: width * 0.1 }]}>
                        <View style={styles.v1}>
                            <Pressable style={[styles.pressableSearch, { width: width * 0.65 }]}>
                                <View style={styles.search}>
                                    <TextInput
                                        placeholder='Search by task title'
                                        style={styles.input}
                                        placeholderTextColor='#ababab'
                                    />
                                    <Image source={require('../assets/icnSearch.png')} style={styles.icns} />
                                </View>
                            </Pressable>
                            <Pressable
                                style={[styles.pressableSearch, { width: width * 0.3 }]}
                                onPress={() => setSortOptionsVisible(!sortOptionsVisible)}
                            >
                                <View style={styles.sort}>
                                    <TextInput
                                        placeholder={sortBy}
                                        style={styles.input}
                                        placeholderTextColor='#ababab'
                                        editable={false}
                                    />
                                    <Image source={require('../assets/icnDown.png')} style={styles.icns} />
                                </View>
                            </Pressable>
                        </View>
                        <Text style={styles.todayTasks}>Today Tasks</Text>
                        <View style={styles.v2}>
                            {sortedTasks.map((data) => (
                                <TouchableOpacity key={data.id}>
                                    <View style={[styles.tasks, { width: width * 0.45 }]}>
                                        <Text style={styles.title}>{data.title}</Text>
                                        <Text style={styles.desc}>{data.desc}</Text>
                                        <Text style={styles.time}>{data.time}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.v3}>
                            {/* Additional content can be added here */}
                        </View>
                    </View>

                    {/* Modal for sorting options */}
                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={sortOptionsVisible}
                        onRequestClose={() => setSortOptionsVisible(false)}
                    >
                        <View style={styles.modalBackground}>
                            <View style={[styles.modalContent,{width : width * 0.8}]}>
                                <Text style={styles.modalTitle}>Sort by</Text>
                                <Pressable style={styles.option} onPress={() => handleSortOptionSelect('Title')}>
                                    <Text style={styles.optionText}>Title</Text>
                                </Pressable>
                                <Pressable style={styles.option} onPress={() => handleSortOptionSelect('Time')}>
                                    <Text style={styles.optionText}>Time</Text>
                                </Pressable>
                                <Pressable style={styles.option} onPress={() => setSortOptionsVisible(false)}>
                                    <Text style={styles.optionText}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        padding: 20,
    },
    main: {
        flex: 1,
    },
    v1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
    },
    pressableSearch: {
        marginHorizontal: 5,
        borderRadius: 8,
        backgroundColor: '#102D53',
        elevation: 3,
    },
    search: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sort: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    v2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    v3: {
        flex: 1,
    },
    icns: {
        height: 30,
        width: 30,
    },
    input: {
        flex: 1,
        color: '#FFFFFF',
    },
    todayTasks: {
        fontSize: 20,
        letterSpacing: 1.5,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
        marginLeft: 15,
        fontFamily: 'Ubuntu-Medium',
    },
    tasks: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        flexShrink: 1,
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'Ubuntu-Medium',
        letterSpacing: 1.5,
        marginBottom: 5,
    },
    desc: {
        color: 'gray',
        fontFamily: 'Ubuntu-Medium',
        letterSpacing: 1,
        marginBottom: 5,
    },
    time: {
        color: 'gray',
        fontFamily: 'Ubuntu-Medium',
        letterSpacing: 1.5,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    option: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 16,
    },
});

export default Tash;
