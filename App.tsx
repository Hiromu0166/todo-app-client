import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import MyFirebaseConfig from './config/firebaseConfig';
import SignInScreen from './src/screens/sign-in/SignIn';
import SignUpScreen from './src/screens/sign-up/SignUp';
import HomeScreen from './src/screens/home/Home';

const MainNavigator = createStackNavigator(
  {
    // Define Screen Components
    SignInScreen: { screen: SignInScreen },
    SignUpScreen: { screen: SignUpScreen },
    HomeScreen: { screen: HomeScreen },
  },
  {
    // Define initial route in a stack 
    initialRouteName: "SignInScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1c388c',
      },
    },
  },
);

const firebaseConfig = {
  apiKey: MyFirebaseConfig.API_KEY,
  authDomain: MyFirebaseConfig.AUTH_DOMAIN,
  databaseURL: MyFirebaseConfig.DATABASE_URI,
  projectId: MyFirebaseConfig.PROJECT_ID,
  storageBucket: MyFirebaseConfig.STORAGE_BACKET,
  messagingSenderId: MyFirebaseConfig.MESSAGING_SENDER_IDmessagingSenderId,
  appId: MyFirebaseConfig.APP_ID
};

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  render() {
    firebase.initializeApp(firebaseConfig);
    return(
      <AppContainer/>
    );
  }
}

export default (App);