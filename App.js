/*Final MoviesApp
 @Ravindra Nakrani
 Git : ravindra3003
*/
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";

import AsyncStorage from '@react-native-async-storage/async-storage';

import MovieDetailScreen from "./src/screen/MovieDetailScreen";
import SearchScreen from "./src/screen/SearchScreen";
import HomeDrawerNavigator from "./src/navigator/HomeDrawerNavigator";
import TVDetailScreen from "./src/screen/TVDetailScreen";
import WebViewScreen from "./src/screen/WebViewScreen";
import MovieListScreen from "./src/screen/MovieListScreen";

import OfflineNotice from "./src/component/OfflineNotice";
import MovieSeasonScreen from "./src/screen/MovieSeasonScreen";

import PageOne from "./src/screen/RenderScreen/PageOne"
import PageTwo from "./src/screen/RenderScreen/PageTwo"
import PageThree from "./src/screen/RenderScreen/PageThree"
import PageFour from "./src/screen/RenderScreen/PageFour"
import MeargeScreen from "./src/screen/RenderScreen/MeargeScreen"
import OnboardingScreen from "./src/screen/RenderScreen/OnboardingScreen";
import Username from "./src/screen/RegisterScreen/Username";
import Email from "./src/screen/RegisterScreen/Email";
import Password from "./src/screen/RegisterScreen/Password";

const Stack = createStackNavigator();
// const Onboarding = createStackNavigator();

const AppNavigator = () => {
  // const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  // useEffect(() => {
  //   async function Fectfrom() {
  //     const appData = await AsyncStorage.getItem('isAppFirstLaunched');
  //     if (appData == null) {
  //       setIsAppFirstLaunched(true);
  //       AsyncStorage.setItem('isAppFirstLaunched', 'false');
  //     } else {
  //       setIsAppFirstLaunched(false);
  //     }
  //   } Fectfrom();
  //   //  second time show onboarding screen
  //   // if you dont need comment this
  //   AsyncStorage.removeItem('isAppFirstLaunched');
  // }, []);
  return (
    // isAppFirstLaunched != null && (
    <Stack.Navigator
      //for every  time show onboarding screen
      initialRouteName="OnboardingScreen"
      //for home screen
      // initialRouteName="Home"
      screenOptions={{
        headerTitle: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      {/* {isAppFirstLaunched && ( */}
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      {/* )} */}
      {/* {isAppFirstLaunched && ( */}
      <Stack.Screen name="Username" component={Username} />
      {/* )} */}
      {/* {isAppFirstLaunched && ( */}
      <Stack.Screen name="Email" component={Email} />
      {/* )} */}
      {/* {isAppFirstLaunched && ( */}
      <Stack.Screen name="Password" component={Password} />
      {/* )} */}

      <Stack.Screen name="Home" component={HomeDrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="TVDetail" component={TVDetailScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureDirection: "vertical",
        }}
      />
      <Stack.Screen name="Webview" component={WebViewScreen} />
      <Stack.Screen name="PageOne" component={PageOne} />
      <Stack.Screen name="PageTwo" component={PageTwo} />
      <Stack.Screen name="PageThree" component={PageThree} />
      <Stack.Screen name="PageFour" component={PageFour} />
      <Stack.Screen name="MeargeScreen" component={MeargeScreen} />
      <Stack.Screen name="Movielist" component={MovieListScreen} />
      <Stack.Screen name="Movieseason" component={MovieSeasonScreen} />
    </Stack.Navigator>
    // )
  );
};


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
      <OfflineNotice />
    </NavigationContainer>
  );
};

export default App;
