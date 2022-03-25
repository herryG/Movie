import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class PageThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IdonthirdPage: this.props.route.params.Id3,
    };
    console.log("-----------")
    console.log(this.state.IdonthirdPage)
    console.log("-----------")
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
          {/* <Text style={{ textAlign: 'center' }}>Page Two Here = Id is {this.state.Id}</Text> */}
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Button
              style={{ paddingLeft: 20 }}
              onPress={() => this.props.navigation.push("PageFour", { Id3: this.state.IdonthirdPage })}
              title="Click to verify"
              color="green"
            // accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
