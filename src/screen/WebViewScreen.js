// import React from "react";
// import PropTypes from "prop-types";
// import Webview from "react-native-webview";
// import Screen from "../component/Screen";

// const WebViewScreen = ({ route }) => {
//   const { id } = route.params;
//   const url = `https://www.youtube.com/watch?v=${id}`;
//   return (
//     <Screen>
//       <Webview source={{ uri: url }} />
//     </Screen>
//   );
// };

// export default WebViewScreen;

// WebViewScreen.propTypes = {
//   route: PropTypes.any,
// };
// import React from "react";
// import PropTypes from "prop-types";
// import Webview from "react-native-webview";
// import Screen from "../component/Screen";

// const WebViewScreen = ({ route }) => {
//   const { id } = route.params;
//   const url = `https://www.youtube.com/watch?v=${id}`;
//   // const url = "https://hindifire.com/view/ZS8w2Xf3HX";
//   // const urlo = "https://nzarticles.xyz/embed?download=EoyDUhdD6JmYbRuBWTZUfblA0";
//   return (
//     <Screen>
//       <Webview source={{ uri: url }} />
//     </Screen>
//   );
// };

// export default WebViewScreen;

// WebViewScreen.propTypes = {
//   route: PropTypes.any,
// };

import React, { Component } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import Webview from "react-native-webview";
import Screen from "../component/Screen";

export default class WebViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IdonWebView: this.props.route.params.Id3,
    };
  }
  backPressed = () => {
    const routeName = this.props.navigation.navigate;
    console.log("route is : " + routeName);
    if (this.props.navigation.isFocused()) {
      console.log("ROUTE : " + routeName);
      // Alert.alert(
      //     "Exit Exam",
      //     "Do you want to Give up?",
      //     [
      //         {
      //             text: "No",
      //             onPress: () => console.log("Cancel Pressed"),
      //             style: "cancel"
      //         },
      //         { text: "Yes", onPress: () => BackHandler.exitApp() }
      //     ],
      //     { cancelable: false }
      // );
      this.props.navigation.navigate('MovieDetail');
      return true;
    }
    else
      return false;
  }

  async componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("focus", () => {
      console.log("didfocus function")
    });
    BackHandler.addEventListener("hardwareBackPress", this.backPressed)
  }

  render() {
    return (
      <Screen>
        <Webview source={{ uri: `https://www.youtube.com/watch?v=${this.state.IdonWebView}` }} />
      </Screen>
    );
  }
}
