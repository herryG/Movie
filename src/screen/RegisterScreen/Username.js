import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from "react-native-gesture-handler";
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { FAB } from 'react-native-paper';
import LottieView from 'lottie-react-native';

export default class Username extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      UserModel: false,
      isValidEmail: true,
      check_EmailInputChange: '',

    };
  }
  _textInputChange = (val) => {
    if (val.trim().length >= 4) {
      this.setState({
        Username: val,
        check_EmailInputChange: true,
        isValidEmail: true
      })
    } else {
      this.setState({
        Username: val,
        check_EmailInputChange: false,
        isValidEmail: false
      })
    }
  }
  _handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      this.setState({
        isValidEmail: true
      })
    } else {
      this.setState({
        isValidEmail: false
      })
    }
  }

  _UserIcon = () => {
    return (
      <Feather
        name="lock"
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
  _checkUsername = () => {
    {
      this.state.Username != null && this.state.Username != undefined && this.state.Username != '' ?
        this.props.navigation.replace('Password') :
        this.setState({
          UserModel: true
        })
    }
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
            <LottieView autoPlay={true} source={require('../../assets/lottie/watch.json')} />
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
                }}>User Name</Text>
                <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 5,
                  //paddingLeft: 20,
                  //paddingRight: 20,
                }}>
                  <FontAwesome
                    name="user-secret"
                    color={'black'}
                    size={20}
                  />
                  <TextInput
                    placeholder="User name"
                    placeholderTextColor="#666666"
                    style={{
                      color: 'black',
                      flex: 1,
                      marginTop: Platform.OS === 'ios' ? 0 : -12,
                      paddingLeft: 10,
                      color: '#05375a',

                    }}
                    autoCapitalize="none"
                    value={this.state.Username}
                    onChangeText={(val) => this._textInputChange(val)}
                    errorStyle={{ color: 'red', marginLeft: 15, marginTop: 5 }}
                    errorMessage={this.state.emailError}
                    inputContainerStyle={{ borderBottomWidth: 0, marginTop: '9%' }}
                    onEndEditing={(e) => this._handleValidUser(e.nativeEvent.text)}
                  />
                  {this.state.check_EmailInputChange ?
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
                {this.state.isValidEmail ? null :
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={{
                      color: '#FF0000',
                      fontSize: 14,
                    }}>Please enter valid username</Text>
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
                  icon={this._UserIcon}
                  // onPress={() => this.props.navigation.replace('Password')}
                  // onPress={() => console.log('Pressed')}
                  onPress={this._checkUsername}
                />
              </View>
            </View>
            <Modal
              animationType='fade'
              transparent={true}
              visible={this.state.UserModel}
            // onRequestClose={() =>
            //     this.setState({
            //         UserModel: false,
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
                  <Text style={{ marginTop: 10, alignSelf: 'flex-start', justifyContent: 'flex-start', fontWeight: '700', fontSize: 16, color: 'black', }}> You don't Entered Username </Text>
                  <Text style={{ marginTop: 5, alignSelf: 'center', justifyContent: 'flex-start', fontWeight: '600', fontSize: 16, color: 'black' }}> Please Enter valid Username. </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        UserModel: false,

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