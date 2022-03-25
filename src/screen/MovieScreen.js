import React, { Component } from "react";
import PropTypes from "prop-types";
import { BackHandler, Alert } from 'react-native';
import HomeComponent from "../component/Home/HomeComponent";
import { requestMovieScreen as RequestMovieApi } from "../api/api";
import { MovieTypes } from "../helper/Types";

class MovieScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: [],
    };
  }
  // backPressed = () => {
  //   if (Platform.OS == 'android') {
  //     const routeName = this.props.navigation.state;
  //     console.log("route is : " + routeName);
  //     if (this.props.navigation.isFocused()) {
  //       console.log("ROUTE : " + routeName);
  //       Alert.alert(
  //         "Exit App",
  //         "Do you want to exit?",
  //         [
  //           {
  //             text: "No",
  //             onPress: () => console.log("Cancel Pressed"),
  //             style: "cancel"
  //           },
  //           { text: "Yes", onPress: () => BackHandler.exitApp() }
  //         ],
  //         { cancelable: false }
  //       );
  //       return true;
  //     }
  //     else
  //       return false;
  //   }
  // }
  componentDidMount() {
    this.requestMovieScreen();
    // BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  requestMovieScreen = async () => {
    await RequestMovieApi((data) => this.setState({ moviesData: data }));
  };

  render() {
    return (
      <HomeComponent
        type={"movie"}
        subTitle={MovieTypes}
        navigation={this.props.navigation}
        data={this.state.moviesData}
        onRefresh={this.requestMovieScreen}
      />
    );
  }
}

export default MovieScreen;

MovieScreen.propTypes = {
  navigation: PropTypes.object,
};
