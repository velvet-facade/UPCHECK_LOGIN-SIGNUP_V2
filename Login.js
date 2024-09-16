import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
//import IoniconsIcon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

function Index(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundBubblesStack}>
        <View style={styles.backgroundBubbles}>
          <Svg viewBox="0 0 165.53 170.73" style={styles.ellipse1}>
            <Ellipse
              strokeWidth={1}
              fill="rgba(167,231,233,1)"
              cx={83}
              cy={85}
              rx={82}
              ry={85}></Ellipse>
          </Svg>
          <Svg viewBox="0 0 72.46 72.14" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(199,197,247,1)"
              cx={36}
              cy={36}
              rx={36}
              ry={36}></Ellipse>
          </Svg>
          <View style={styles.ellipse3Row}>
            <Svg viewBox="0 0 181.27 174.89" style={styles.ellipse3}>
              <Ellipse
                strokeWidth={1}
                cx={91}
                cy={87}
                rx={90}
                ry={87}
                fill="rgba(231,205,236,1)"></Ellipse>
            </Svg>
            <Svg viewBox="0 0 72.46 72.14" style={styles.ellipse4}>
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
        <View style={styles.main_container}>
          <View style={styles.rect1}>
            <Image
              source={require('./assets/images/upcheck-logo.png')}
              resizeMode="contain"
              style={styles.logo}></Image>
            <Text style={styles.welcomeToUpcheck}>Welcome to Upcheck!</Text>
            <Text style={styles.loginText}>Login to your account</Text>
            <View style={styles.entryContainer}>
              <Text style={styles.loremIpsum}>
                Enter Phone/ E-mail address:
              </Text>
              <TextInput
                placeholder="Ex: yourname@xyz.com"
                placeholderTextColor="rgba(0,0,0,1)"
                selectionColor="rgba(80,227,194,1)"
                style={styles.emailbox}></TextInput>

              <Text style={styles.enterPassword}>Enter Password:</Text>
              <TextInput
                placeholder=""
                placeholderTextColor="rgba(0,0,0,1)"
                selectionColor="rgba(80,227,194,1)"
                secureTextEntry={true}
                blurOnSubmit={true}
                style={styles.passswordbox}></TextInput>
            </View>
            <View style={styles.proceedButton}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.proceed}>Verify</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.loremIpsum3}>
                Don&#39;t have an Account? SignUp Here!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: width / 10,
    marginLeft: height / 70,
  },
  backgroundBubbles: {
    top: 0,
    //width: 360,
    //height: 718,
    position: 'absolute',
    left: 0,
    opacity: 0.94,
  },
  ellipse1: {
    width: 166,
    height: 171,
    marginLeft: 275,
  },
  ellipse2: {
    width: 72,
    height: 72,
    marginTop: 37,
    marginLeft: 12,
  },
  ellipse3: {
    width: 181,
    height: 175,
    opacity: 0.85,
    marginTop: 60,
  },
  ellipse4: {
    width: 72,
    height: 72,
    opacity: 0.49,
    marginLeft: 118,
  },
  ellipse3Row: {
    height: 235,
    flexDirection: 'row',
    marginTop: 174,
    marginRight: -11,
  },
  main_container: {
    top: 59,
    left: 30,
    width: 301,
    height: 593,
    position: 'absolute',
  },
  rect1: {
    width: 301,
    height: 591,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 41,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,1)',
  },
  logo: {
    width: 142,
    height: 137,
    marginTop: 29,
    marginLeft: 79,
  },
  welcomeToUpcheck: {
    fontFamily: 'roboto-700',
    color: '#121212',
    //height: 29,
    //width: 202,
    fontSize: 20,
    //marginTop: 16,
    marginLeft: height / 15,
    fontWeight: 'bold',
  },
  loginText: {
    fontFamily: 'roboto-700',
    color: '#121212',
    //height: 27,
    //width: 151,
    fontSize: 15,
    marginLeft: height / 10,
    fontWeight: 'bold',
    paddingTop: '2%',
  },
  entryContainer: {
    width: 257,
    height: 161,
    marginTop: 25,
    marginLeft: 22,
  },
  emailIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    marginLeft: 7,
  },
  loremIpsum: {
    fontFamily: 'roboto-700',
    color: '#121212',
    // height: 17,
    //width: 223,
    //marginTop: 5,
    marginLeft: 2,
    fontWeight: 'bold',
  },
  emailbox: {
    paddingLeft: 10,
    fontFamily: 'helvetica-regular',
    color: '#121212',
    height: 42,
    width: 257,
    backgroundColor: 'rgba(140,183,183,1)',
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
    marginTop: 5,
  },
  passwordIcon: {
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    marginTop: 27,
    marginLeft: 6,
  },
  enterPassword: {
    fontFamily: 'roboto-700',
    color: '#121212',
    // height: 17,
    //width: 223,
    marginTop: width / 20,
    marginLeft: 2,
    fontWeight: 'bold',
  },
  passswordbox: {
    fontFamily: 'helvetica-regular',
    color: '#121212',
    height: 42,
    width: 257,
    backgroundColor: 'rgba(140,183,183,1)',
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
    marginTop: 3,
  },
  proceedButton: {
    //width: 99,
    //height: 41,
    marginTop: height / 20,
    marginLeft: width / 4,
  },
  button: {
    width: 123,
    height: 41,
    backgroundColor: 'rgba(140,183,183,1)',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 0.63,
    shadowRadius: 20,
    marginLeft: -7,
  },
  proceed: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 20,
    width: 38,
    marginLeft: 42,
    marginTop: 10,
  },
  loremIpsum3: {
    fontFamily: 'roboto-700',
    color: 'rgba(26,32,195,1)',
    //height: 18,
    //width: 236,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginTop: width / 10,
    marginLeft: height / 25,
  },
  backgroundBubblesStack: {
    //resizeMode: 'contain',
    width: width,
    height: height,
  },
});

export default Index;
