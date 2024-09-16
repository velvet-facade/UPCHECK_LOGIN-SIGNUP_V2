import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
//import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');

function SignUp(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundBubbles1Stack}>
        <View style={styles.backgroundBubbles1}>
          <Svg viewBox="0 0 165.53 170.73" style={styles.ellipse7}>
            <Ellipse
              strokeWidth={1}
              fill="rgba(167,231,233,1)"
              cx={83}
              cy={85}
              rx={82}
              ry={85}></Ellipse>
          </Svg>
          <Svg viewBox="0 0 72.46 72.14" style={styles.ellipse8}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(199,197,247,1)"
              cx={36}
              cy={36}
              rx={36}
              ry={36}></Ellipse>
          </Svg>
          <View style={styles.ellipse9Row}>
            <Svg viewBox="0 0 181.27 174.89" style={styles.ellipse9}>
              <Ellipse
                strokeWidth={1}
                cx={91}
                cy={87}
                rx={90}
                ry={87}
                fill="rgba(231,205,236,1)"></Ellipse>
            </Svg>
            <Svg viewBox="0 0 72.46 72.14" style={styles.ellipse10}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(239,165,190,1)"
                cx={36}
                cy={36}
                rx={36}
                ry={36}></Ellipse>
            </Svg>
          </View>
        </View>

        <View style={styles.maincontainer}>
          <View style={styles.subContainerStack}>
            <View style={styles.subContainer}>
              <Text style={styles.upcheck}>UPCHECK</Text>
              <Text style={styles.subText}>
                Sign up once and get your farm to the best possible level!
              </Text>
              <TextInput
                placeholder="Display name"
                placeholderTextColor="rgba(0,0,0,1)"
                selectionColor="rgba(80,227,194,1)"
                style={styles.displayName}></TextInput>
              <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(0,0,0,1)"
                selectionColor="rgba(80,227,194,1)"
                style={styles.username}></TextInput>
              <TextInput
                placeholder="Email address"
                placeholderTextColor="rgba(0,0,0,1)"
                selectionColor="rgba(80,227,194,1)"
                keyboardType="email-address"
                style={styles.emailbox}></TextInput>
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(0,0,0,1)"
                selectionColor="rgba(80,227,194,1)"
                secureTextEntry={true}
                style={styles.passwordbox}></TextInput>
              <View style={styles.signUpButton}>
                <TouchableOpacity style={styles.button}>
                  <View style={styles.textStack}>
                    <Text style={styles.text}>Sign up</Text>
                    <EntypoIcon
                      name="chevron-right"
                      style={styles.nextIcon}></EntypoIcon>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    padding: 10,
                  }}
                  //onPress={{}}
                >
                  <Text
                    style={{
                      fontFamily: 'roboto-700',
                      color: 'rgba(5,14,255,1)',
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                    Already have an account? Login{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                top: -670,
              }}>
              <Svg viewBox="0 0 82 81.77" style={styles.logoContainer}>
                <Ellipse
                  stroke="rgba(0,0,0,1)"
                  strokeWidth={1}
                  cx={41}
                  cy={41}
                  rx={41}
                  ry={40}
                  fill="rgba(255,255,255,1)"></Ellipse>
              </Svg>
              <Image
                source={require('./assets/images/upcheck-logo.png')}
                resizeMode="contain"
                style={styles.logo}></Image>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundBubbles1: {
    top: 0,
    width: 360,
    height: 718,
    position: 'absolute',
    left: 0,
    opacity: 0.94,
  },
  ellipse7: {
    width: 166,
    height: 171,
    marginLeft: 275,
  },
  ellipse8: {
    width: 72,
    height: 72,
    marginTop: 37,
    marginLeft: 12,
  },
  ellipse9: {
    width: 181,
    height: 175,
    opacity: 0.85,
    marginTop: 60,
  },
  ellipse10: {
    width: 72,
    height: 72,
    opacity: 0.49,
    marginLeft: 118,
  },
  ellipse9Row: {
    height: 235,
    flexDirection: 'row',
    marginTop: 174,
    marginRight: -11,
  },
  backButton: {
    top: 47,
    left: 17,
    width: 24,
    height: 39,
    position: 'absolute',
  },
  button2: {
    width: 24,
    height: 33,
    opacity: 0,
    marginTop: 6,
  },
  icon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
    height: 33,
    width: 21,
  },
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //top: 43,
    //width: 283,
    //height: 585,
    //position: "absolute",
    backgroundColor: 'rgba(140,183,183,0.91)',
    borderRadius: 41,
    //left: 0,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.91)',
    //marginLeft: height *0.001
  },
  upcheck: {
    fontFamily: 'roboto-700',
    color: 'rgba(0,0,0,1)',
    //height: 23,
    //width: 92,
    fontSize: 20,
    //marginTop: 53,
    //marginLeft: 96
    fontWeight: 'bold',
  },
  subText: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    height: 54,
    width: 253,
    textAlign: 'center',
    marginTop: 18,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  displayName: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 42,
    width: 233,
    backgroundColor: 'rgba(230, 230, 230,1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.43,
    shadowRadius: 20,
    fontSize: 13,

    //marginTop: 12,
    //marginLeft: 25,
    paddingLeft: 20,
  },
  username: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 42,
    width: 233,
    backgroundColor: 'rgba(230, 230, 230,1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.43,
    shadowRadius: 20,
    fontSize: 13,
    marginTop: 25,
    //marginLeft: 25,
    paddingLeft: 20,
  },
  emailbox: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 42,
    width: 233,
    backgroundColor: 'rgba(230, 230, 230,1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.43,
    shadowRadius: 20,
    fontSize: 13,
    marginTop: 26,
    //marginLeft: 25,
    paddingLeft: 20,
  },
  passwordbox: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 42,
    width: 233,
    backgroundColor: 'rgba(230, 230, 230,1)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.43,
    shadowRadius: 20,
    fontSize: 13,
    marginTop: 32,
    //marginLeft: 25,
    paddingLeft: 20,
  },
  signUpButton: {
    width: 233,
    height: 48,
    marginTop: 56,
    //marginLeft: 25,
  },
  button: {
    width: 233,
    height: 48,
    backgroundColor: 'rgba(193,232,222,1)',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000000',
  },
  text: {
    top: -2,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-700',
    color: '#121212',
    //height: 18,
    //width: 55,

    fontWeight: 'bold',
  },
  nextIcon: {
    //top: 0,
    left: 44,
    //position: "absolute",
    color: 'rgba(0,0,0,1)',
    fontSize: 17,
    //height: 18,
    //width: 17
  },
  textStack: {
    //width: 61,
    //height: 18,
    marginTop: 15,
    marginLeft: 96,
  },
  logoContainer: {
    top: 3,
    left: 101,
    width: 82,
    height: 82,
    position: 'absolute',
  },
  logo: {
    top: 0,
    left: 107,
    width: 70,
    height: 87,
    position: 'absolute',
  },
  subContainerStack: {
    width: 283,
    height: 628,
  },
  backgroundBubbles1Stack: {
    width: width,
    height: height,
  },
});

export default SignUp;
