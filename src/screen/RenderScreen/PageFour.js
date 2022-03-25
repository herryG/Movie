// import React, { Component } from 'react';
// import { View, Text, Button } from 'react-native';

// export default class PageFour extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Idonfinalpage: this.props.route.params.Id3,
//     };
//     console.log("-----------")
//     console.log(this.state.Idonfinalpage)
//     console.log("-----------")
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', }}>
//         {/* <Text style={{ textAlign: 'center' }}>Page Two Here = Id is {this.state.Id}</Text> */}
//         <View style={{ paddingLeft: 20, paddingRight: 20 }}>
//           <Button
//             style={{ paddingLeft: 20 }}
//             onPress={() => this.props.navigation.navigate("Webview", { Id3: this.state.Idonfinalpage })}
//             title="Watch Now"
//             color="gray"
//           // accessibilityLabel="Learn more about this purple button"
//           />
//         </View>
//       </View>
//     );
//   }
// }
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class PageFour extends Component {

  constructor(props) {
    super(props)

    this.state = {
      Id: '',
      Idonfinalpage: this.props.route.params.Id3,
      textInput_text_holder: 0,
      sum_holder: 0,
      random_number_1: 0,
      random_number_2: 0,
    }
    console.log("-----------")
    console.log(this.state.id)
    console.log("-----------")
  }

  componentDidMount() {

    this.generate_captcha();
  }

  generate_captcha = () => {

    var number_1 = Math.floor(Math.random() * 100) + 1;

    var number_2 = Math.floor(Math.random() * 100) + 1;

    var sum = number_1 + number_2;

    this.setState({ random_number_1: number_1, random_number_2: number_2 });

    this.setState({ sum_holder: sum });
  }

  run_captcha_function = () => {

    var temp = this.state.random_number_1 + this.state.random_number_2;

    if (this.state.textInput_text_holder == temp) {

      //Write Your Code Here Which you want to execute on RIGHT Captcha Entered.
      Alert.alert(
        "Congratulation",
        "Press Play Button to watch?",
        [
          {
            text: "No",
            onPress: () => console.log("Congratulation"),
            style: "cancel"
          },
          { text: "Play", onPress: () => this.props.navigation.push("Webview", { Id3: this.state.Idonfinalpage }) }
        ],
        { cancelable: false }
      );
    }
    else {

      //Write Your Code Here Which you want to execute on WRONG Captcha Entered.
      Alert.alert("Please Enter Valid Captcha");
    }

    // Calling captcha function, So each time new captcha number generates on button clicks.
    this.generate_captcha();

  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.MainContainer}>

          <View style={styles.captcha_view}>

            <Text style={{ fontSize: 22, textAlign: 'center', color: '#000' }}>
              {this.state.random_number_1} {"+"} {this.state.random_number_2} {"= "}
            </Text>

            <TextInput
              placeholder="Enter Ans"
              keyboardType='decimal-pad'
              onChangeText={data => this.setState({ textInput_text_holder: data })}
              style={styles.textInputStyle}
              underlineColorAndroid='transparent'
            />

            <TouchableOpacity onPress={this.generate_captcha} >

              <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/08/reload_image.jpg' }}
                style={{ width: 42, height: 42, resizeMode: 'contain', margin: 5 }} />

            </TouchableOpacity>

          </View >

          <TouchableOpacity style={styles.button} onPress={this.run_captcha_function} >

            <Text style={styles.text}>Click To Watch</Text>

          </TouchableOpacity>

        </View >

      </SafeAreaView>

    );
  }
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 30,
    alignItems: 'center',
    backgroundColor: 'white'
  },

  captcha_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#000',
    width: '90%',
    height: 90,
    borderWidth: 1,
    borderRadius: 7,
    padding: 5,
    backgroundColor: '#fff'
  },

  textInputStyle: {

    textAlign: 'center',
    height: 40,
    width: 100,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
  },

  button: {

    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#BF360C',
    borderRadius: 3,
    marginTop: 20
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  }

});