import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, useWindowDimensions, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

function Settings({navigation}) {
  const { width } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Return null or a loading indicator while fonts are loading
  }

  return (
    <LinearGradient colors={['#1253AA', '#05243E']} style={styles.gradient}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.main}>
          <View style={[styles.headerContainer, { width, height: width * 0.2, marginTop: width * 0.05 }]}>
            <Text style={[styles.txtSettings, { fontSize: width * 0.06 }]}>Settings</Text>
          </View>
          
          <View style={[styles.optionsContainer, { marginTop: width * 0.15 }]}>
            {/* Profile Option */}
            <TouchableOpacity style={[styles.touchables, { height: width * 0.12 }]} onPress={() => console.log('Profile')}>
              <View style={[styles.logoAndTxt, { width: width * 0.3 }]}>
                <View style={[styles.vlogo, { width: width * 0.1, height: width * 0.1 }]}>
                  <Image source={require('../assets/icnProfile.png')} style={[styles.icns, { width: width * 0.1, height: width * 0.1 }]} />
                </View>
                <View style={styles.vTxt}>
                  <Text style={styles.txts}>Profile</Text>
                </View>
              </View>
              <View style={styles.varrow}>
                <Image source={require('../assets/nextVector.png')} style={[styles.icn, { width: width * 0.1, height: width * 0.05 }]} />
              </View>
            </TouchableOpacity>

            {/* Conversations Option */}
            <TouchableOpacity style={[styles.touchables, { height: width * 0.12 }]} onPress={() => console.log('Conversations')}>
              <View style={[styles.logoAndTxt, { width: width * 0.45 }]}>
                <View style={[styles.vlogo, { width: width * 0.1, height: width * 0.1 }]}>
                  <Image source={require('../assets/icnChat.png')} style={[styles.icns, { width: width * 0.09, height: width * 0.09 }]} />
                </View>
                <View style={[styles.vTxt, {  }]}>
                  <Text style={styles.txts}>Conversations</Text>
                </View>
              </View>
              <View style={styles.varrow}>
                <Image source={require('../assets/nextVector.png')} style={[styles.icn, { width: width * 0.1, height: width * 0.05 }]} />
              </View>
            </TouchableOpacity>

            {/* Projects Option */}
            <TouchableOpacity style={[styles.touchables, { height: width * 0.12 }]} onPress={() => console.log('Projects')}>
              <View style={[styles.logoAndTxt, { width: width * 0.3 }]}>
                <View style={[styles.vlogo, { width: width * 0.1, height: width * 0.1 }]}>
                  <Image source={require('../assets/icnProjects.png')} style={[styles.icns, { width: width * 0.08, height: width * 0.1, left: 3 }]} />
                </View>
                <View style={styles.vTxt}>
                  <Text style={styles.txts}>Projects</Text>
                </View>
              </View>
              <View style={styles.varrow}>
                <Image source={require('../assets/nextVector.png')} style={[styles.icn, { width: width * 0.1, height: width * 0.05 }]} />
              </View>
            </TouchableOpacity>

            {/* Terms and Conditions Option */}
            <TouchableOpacity style={[styles.touchables, { height: width * 0.12 }]} onPress={() => console.log('Terms and Conds')}>
              <View style={[styles.logoAndTxt, { width: width * 0.3 }]}>
                <View style={[styles.vlogo, { width: width * 0.1, height: width * 0.1 }]}>
                  <Image source={require('../assets/icnTerms.png')} style={[styles.icns, { width: width * 0.09, height: width * 0.09, left: 5 }]} />
                </View>
                <View style={[styles.vTxt, { left: 3 }]}>
                  <Text style={styles.txts}>Terms and Conditions</Text>
                </View>
              </View>
              <View style={styles.varrow}>
                <Image source={require('../assets/nextVector.png')} style={[styles.icn, { width: width * 0.1, height: width * 0.05 }]} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.logoutContainer, { marginTop: width * 0.15, width: width * 0.5, height: width * 0.106 }]}>
            <Pressable style={styles.logoutBtn} onPress={() => navigation.navigate('SignIn')}>
              <Image source={require('../assets/icnLogout.png')} style={[styles.icns, { width: width * 0.09, height: width * 0.09 }]} />
              <Text style={styles.logoutTxt}>Logout</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default Settings;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent : 'center',
  },
  txtSettings: {
    color: 'white',
    fontFamily: 'Ubuntu-Medium',
    fontWeight: '600',
    letterSpacing: 2,
    

  },
  optionsContainer: {},
  touchables: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  logoAndTxt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vlogo: {},
  icns: {
    resizeMode: 'contain',
  },
  vTxt: {},
  txts: {
    color: 'white',
    fontFamily: 'Ubuntu-Medium',
    fontWeight: '600',
    letterSpacing: 2,
    marginLeft : 7
  },
  varrow: {
    justifyContent: 'center',
  },
  logoutContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  logoutTxt: {
    color: '#DC4343',
    fontFamily: 'Ubuntu-Medium',
    fontWeight: '600',
    letterSpacing: 2,
    marginLeft: 10,
  },
});
