import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from "react-native-gesture-handler";
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FAB } from 'react-native-paper';
import LottieView from 'lottie-react-native';

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: '',
      password: '',
      PassModel: false,
      isShowLoginPassword: true,
      isValidPassword: true,
      isValidConPassword: true,
      isConfirmPassword: true,
    };
  }

  _handlePasswordChange = (val) => {
    if (val.trim().length >= 4) {
      this.setState({
        password: val,
        isValidPassword: true
      })
    } else {
      this.setState({
        password: val,
        isValidPassword: false
      })
    }
  }


  _UserIcon = () => {
    return (
      <MaterialCommunityIcons
        name="monitor-screenshot"
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

  _checkPassword = () => {
    {
      this.state.password != null && this.state.password != undefined && this.state.password != '' ?
        this.props.navigation.replace('Home') :
        this.setState({
          PassModel: true
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
            <LottieView autoPlay={true} source={require('../../assets/lottie/pass.json')} />
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
                  //color: 'black',
                  marginTop: 15,
                  color: '#05375a',
                  fontSize: 18,
                  //paddingLeft: 20,
                }}>Password</Text>
                <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 5,
                  //paddingLeft: 20,
                  //paddingRight: 20
                }}>
                  <Feather
                    name="lock"
                    color={'black'}
                    size={20}
                  />
                  <TextInput
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    style={{
                      color: 'black',
                      flex: 1,
                      marginTop: Platform.OS === 'ios' ? 0 : -12,
                      paddingLeft: 10,
                      color: '#05375a',
                    }}
                    autoCapitalize="none"
                    value={this.state.password}
                    secureTextEntry={this.state.isShowLoginPassword ? true : false}
                    onChangeText={(val) => this._handlePasswordChange(val)}
                    // onChangeText={(loginPassword) => this.setState({ loginPassword })}
                    // secureTextEntry={this.state.isShowLoginPassword}
                    errorStyle={{ color: 'red', marginLeft: 15, marginTop: 5 }}
                    errorMessage={this.state.LoginpasswordError}
                    inputContainerStyle={{ borderBottomWidth: 0, marginTop: '9%', }}
                  />
                  <TouchableOpacity
                    onPress={() => this.setState({ isShowLoginPassword: !this.state.isShowLoginPassword })}>
                    {!this.state.isShowLoginPassword ?
                      <Feather
                        name="eye"
                        color="grey"
                        size={20}
                      />
                      :
                      <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                      />
                    }
                  </TouchableOpacity>
                </View>
                {this.state.isValidPassword ? null :
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={{
                      color: '#FF0000',
                      fontSize: 14,
                    }}>Password must be 4 characters long.</Text>
                  </Animatable.View>
                }
                <Text style={{
                  //color: 'black',
                  marginTop: 15,
                  color: '#05375a',
                  fontSize: 18,
                  //paddingLeft: 20,
                }}>Confirm Password</Text>
                <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 5,
                  //paddingLeft: 20,
                  //paddingRight: 20
                }}>
                  {/* <View style={{
                                    elevation: 5,
                                    backgroundColor: 'white',
                                    marginVertical: 10,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    borderWidth: 1,
                                    marginTop: 20,
                                    borderColor: '#009387',
                                    width: '75%',
                                    height: 60,
                                    borderRadius: 15
                                }}> */}
                  <Feather
                    name="lock"
                    color={'black'}
                    size={20}
                  />
                  <TextInput

                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    style={{
                      color: 'black',
                      flex: 1,
                      marginTop: Platform.OS === 'ios' ? 0 : -12,
                      paddingLeft: 10,
                      color: '#05375a',
                    }}

                    // rightIcon={
                    //     <TouchableOpacity activeOpacity={1}
                    //         onPress={() => this.setState({ isConfirmPassword: !this.state.isConfirmPassword })}>
                    //         <Icon
                    //             name={!this.state.isConfirmPassword ? 'eye-off' : 'eye'}
                    //             size={24}
                    //             color='grey'
                    //         />
                    //     </TouchableOpacity>
                    // }
                    onEndEditing={() => {
                      if (this.state.confirmPassword) {
                        if (this.state.password === this.state.confirmPassword) {
                          this.setState(() => ({
                            isValidConPassword: true
                          }));
                          // this._callSignUp();
                        }
                        else {
                          this.setState(() => ({
                            isValidConPassword: false
                          }));
                        }
                      }
                      // else {
                      //     this.setState({ isConpasselse : false})
                      // }
                    }}
                    //ref={(ref) => (this.inputRef = ref)}
                    value={this.state.confirmPassword}
                    onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                    secureTextEntry={this.state.isConfirmPassword}
                    inputContainerStyle={{ borderBottomWidth: 0, marginTop: '9%' }}
                    errorStyle={{ color: 'red', marginLeft: 15, marginTop: 5 }}
                    errorMessage={this.state.c_passwordError}
                  />
                  <TouchableOpacity
                    onPress={() => this.setState({ isConfirmPassword: !this.state.isConfirmPassword })}>
                    {!this.state.isConfirmPassword ?
                      <Feather
                        name="eye"
                        color="grey"
                        size={20}
                      />
                      :
                      <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                      />
                    }
                  </TouchableOpacity>
                </View>
                {this.state.isValidConPassword ? null :
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={{
                      color: '#FF0000',
                      fontSize: 14,
                    }}>Password did not match</Text>
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
                  // onPress={() => this.props.navigation.replace('Home')}
                  // onPress={() => console.log('Pressed')}
                  onPress={this._checkPassword}
                />
              </View>
            </View>
            <Modal
              animationType='fade'
              transparent={true}
              visible={this.state.PassModel}
            // onRequestClose={() =>
            //     this.setState({
            //         PassModel: false,
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
                  <Text style={{ marginTop: 10, alignSelf: 'flex-start', justifyContent: 'flex-start', fontWeight: '700', fontSize: 16, color: 'black', }}> You don't Entered Password! </Text>
                  <Text style={{ marginTop: 5, alignSelf: 'center', justifyContent: 'flex-start', fontWeight: '600', fontSize: 16, color: 'black' }}> Please Enter valid Password. </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        PassModel: false,

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