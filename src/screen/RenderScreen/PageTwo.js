import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: this.props.route.params.Id3,
      Id3: '',
    };
    console.log("-----------")
    console.log(this.state.Id)
    console.log("-----------")
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
          {/* <Text style={{ textAlign: 'center' }}>Page Two Here = Id is {this.state.Id}</Text> */}
          <View style={{ paddingLeft: 50, paddingRight: 50 }}>
            <Button
              style={{ paddingLeft: 20 }}
              onPress={() => this.props.navigation.push("PageThree", { Id3: this.state.Id })}
              title="Genrate"
              color="#841584"
            //accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}