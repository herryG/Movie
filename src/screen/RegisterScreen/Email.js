import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from "react-native-gesture-handler";
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { FAB } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

export default class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailaddress: '',
      // emailError: '',
      EmailModel: false,
      isValidUser: true,
      check_textInputChange: '',

    };
  }
  _textInputChange = (val) => {
    if (val.trim().length >= 10) {
      this.setState({
        emailaddress: val,
        check_textInputChange: true,
        isValidUser: true
      })
    } else {
      this.setState({
        emailaddress: val,
        check_textInputChange: false,
        isValidUser: false
      })
    }
  }
  _handleValidUser = (val) => {
    if (val.trim().length >= 10) {
      this.setState({
        isValidUser: true
      })
    } else {
      this.setState({
        isValidUser: false
      })
    }
  }

  _checkEmail = () => {
    {
      this.state.emailaddress != null && this.state.emailaddress != undefined && this.state.emailaddress != '' ?
        this.props.navigation.replace('Username') :
        this.setState({
          EmailModel: true
        })
    }
  }


  _EmailIcon = () => {
    return (
      <FontAwesome
        name="user-secret"
        color={'black'}
        size={20}
        style={{
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',
          color: 'black',
          margin: 2
        }}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#98AFC7' }}>
          <View style={{ flexDirection: 'row', backgroundColor: '#009387' }} >
            {/* <TouchableOpacity activeOpacity={1} style={{ margin: 10, padding: 10, alignSelf: 'center' }}
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-back" size={35} color="black" />
                        </TouchableOpacity> */}
          </View>
          <View style={{
            marginTop: 10,
            // paddingTop: 50,
            //justifyContent: 'flex-end',
            paddingHorizontal: 50,
            paddingBottom: 10,
            height: 155,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* <View style={{ flex: 1, height: 150, justifyContent: 'center', alignItems: 'center' }}> */}
            <LottieView autoPlay={true} source={require('../../assets/lottie/emaill.json')} />
            {/* </View> */}
            {/* <Text style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 30
            }}>Welcome!</Text> */}
          </View>
          <View style={{
            height: '40%',
            marginTop: '8%',
            flex: 1,
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            // paddingHorizontal: 20,
            borderTopRightRadius: 30
          }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ height: Platform.OS == 'android' ? 50 : '20%' }}></View>
              <Animatable.View
                animation="fadeInUpBig"
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  paddingHorizontal: 20,
                  //paddingVertical: 30,
                  // backgroundColor: 'white'
                }}
              >
                <Text style={{
                  color: '#05375a',
                  fontSize: 18,
                  //paddingLeft: 20,
                  //color: 'black'
                }}>Email</Text>
                <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 5,
                  //paddingLeft: 20,
                  //paddingRight: 20,
                }}>
                  <MaterialCommunityIcons
                    name="email-check-outline"
                    color={'black'}
                    size={20}
                  />
                  <TextInput
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={{
                      color: 'black',
                      flex: 1,
                      marginTop: Platform.OS === 'ios' ? 0 : -12,
                      paddingLeft: 10,
                      color: '#05375a',

                    }}
                    autoCapitalize="none"
                    value={this.state.emailaddress}
                    onChangeText={(val) => this._textInputChange(val)}
                    errorStyle={{ color: 'red', marginLeft: 15, marginTop: 5 }}
                    errorMessage={this.state.emailError}
                    inputContainerStyle={{ borderBottomWidth: 0, marginTop: '10%' }}
                    onEndEditing={(e) => this._handleValidUser(e.nativeEvent.text)}
                  />
                  {this.state.check_textInputChange ?
                    <Animatable.View
                      animation="bounceIn"
                    >
                      <Feather
                        name="check-circle"
                        color="#98AFC7"
                        size={20}
                      />
                    </Animatable.View>
                    : null}
                </View>
                {this.state.isValidUser ? null :
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={{
                      color: '#FF0000',
                      fontSize: 14,
                    }}>Enter Email</Text>
                  </Animatable.View>
                }
              </Animatable.View>
            </ScrollView>
            <View style={{ marginBottom: 10 }}>
              <View style={{ justifyContent: 'flex-end' }}>
                <FAB
                  style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,

                  }}
                  large
                  icon={this._EmailIcon}
                  // onPress={() => this.props.navigation.replace('Username')}
                  // onPress={() => console.log('Pressed')}
                  onPress={this._checkEmail}
                />
              </View>
            </View>
            <Modal
              animationType='fade'
              transparent={true}
              visible={this.state.EmailModel}
            // onRequestClose={() =>
            //     this.setState({
            //         EmailModel: false,
            //     })}
            >
              <View style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                flex: 1,
                justifyContent: 'center',
              }}>
                <View style={{
                  margin: 30,
                  backgroundColor: "#E5E4E2",
                  borderRadius: 20,
                  padding: 40,
                  alignItems: "center",
                  justifyContent: 'center',
                }}>
                  {/* <Image source={require('../../assets/images/sorry.png')} resizeMode={'center'} style={{ height: 70, width: 70 }} /> */}
                  {/* <LottieView autoPlay={true} source={require('../../assets/lottie/emaill.json')} /> */}
                  <Text style={{ marginTop: 10, alignSelf: 'flex-start', justifyContent: 'flex-start', fontWeight: '700', fontSize: 16, color: 'black', }}> You don't Entered valid Email! </Text>
                  <Text style={{ marginTop: 5, alignSelf: 'center', justifyContent: 'flex-start', fontWeight: '600', fontSize: 16, color: 'black' }}> Please Enter valid email. </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        EmailModel: false,

                      })} activeOpacity={1} style={{ justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                    <Text style={{ marginTop: 10, fontSize: 18, textAlign: 'right', color: 'black', fontWeight: 'bold', letterSpacing: 0.5, fontStyle: 'normal' }}>  Ok  </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </SafeAreaView >
    );
  }
}
