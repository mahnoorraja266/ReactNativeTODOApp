// make sign in and sign up text pressable


import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput, useWindowDimensions, TouchableWithoutFeedback, Keyboard , TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';





function SignIn({navigation}) {

  const mail = 'alpha';
  const pwd = '1234';


  const { width } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });



  const checkPassword = () => {
    if(email === mail && password === pwd)
    {
      navigation.navigate('tabs',{email : email})
    }
    else
    {
      console.log('Not Ok!');
    }
  }



  const handleSubmit = () => {
    console.log('email', email);
    console.log('Password ', password);
  };

  if (!fontsLoaded) {
    return null; // Return null or a loader until fonts are loaded
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={['#05243E', '#1253AA']} style={styles.gradient}>
        <SafeAreaView style={styles.safeArea}>
                <View style = {styles.textsUpper}>
                  <Image style={styles.img} source={require('../assets/Checkmark.png')} />
                        <View style={styles.txts}>
                            <Text style={styles.txtWel}>Welcome Back to DO IT</Text>
                            <Text style={styles.txtWelSub}>Have another productive day!</Text>
                        </View>
                </View>
            <View style={styles.upper}>
                    <View style={styles.inputs}>
                        <View style={[styles.inputContainer, { width: width * 0.9 }]}>
                            <Image style={styles.inputIcon} source={require('../assets/EmailLogo.png')} />
                            <TextInput
                                style={styles.email}
                                placeholder="E-mail"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                this.passwordInput.focus();
                                }}
                                blurOnSubmit={false}
                            />
                        </View>
                        <View style={[styles.inputContainer, { width: width * 0.9 }]}>
                            <Image style={styles.inputIcon} source={require('../assets/Lock.png')} />
                            <TextInput
                                ref={(input) => { this.passwordInput = input; }}
                                style={styles.password}
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                returnKeyType="done"
                            />
                        </View>
                        <Text style={[styles.forget, { marginLeft: width * 0.55 }]}>forget password?</Text>
                        <Pressable style={[styles.button, { width: width * 0.9 }]} onPress={checkPassword}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </Pressable>
                        <View style={styles.dhac}>
                            <Text style={styles.sgnup1}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.sgnup2}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>

          <View style={styles.sgnWith}>
            <Text style={[styles.sgnup1, { marginRight: 20 }]}>Sign In with:</Text>
            <View style={styles.logoContainer}>
              <Image style={styles.aplLogo} source={require('../assets/AppleLogo.png')} />
            </View>
            <View style={[styles.logoContainer, { marginLeft: 15, marginRight: 60 }]}>
              <Image style={styles.gglLogo} source={require('../assets/GoogleLogo.png')} />
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
  safeArea: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  upper: {
    flex : 6,
    alignItems : 'center',
    justifyContent : 'center'
  },
  textsUpper : {
    marginTop : 10,
    justifyContent:'center',
    alignItems : 'center'
  },
  img: {
    width: 80,
    height: 80,
  },
  txts: {
    marginTop: 30,
    alignItems: 'center',
  },
  txtWel: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    fontFamily: 'Ubuntu-Medium',
  },
  txtWelSub: {
    fontWeight: '200',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Ubuntu-Medium',
    marginTop: 10,
    textAlign: 'center',
  },
  inputs: {
    marginTop: 30,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  inputIcon: {
    width: 25,
    height: 25,
   
  },
  email: {
    flex: 1,
    marginLeft: 10,
  },
  password: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#0EA5E9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu-Medium',
  },
  forget: {
    marginBottom : 10,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Ubuntu-Medium',
  },
  sgnup1: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Ubuntu-Medium',
  },
  sgnup2: {
    color: '#0EA5E9',
    fontSize: 14,
    fontFamily: 'Ubuntu-Medium',
    marginLeft: 5,
  },
  dhac: {
    flexDirection: 'row',
    marginTop: 20,
  },
  sgnWith: {
    flex : 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  aplLogo: {
    width: 30,
    height: 30,
  },
  gglLogo: {
    width: 30,
    height: 30,
  },
});

export default SignIn;
