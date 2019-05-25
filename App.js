import { createStackNavigator, createAppContainer } from 'react-navigation';
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
  },
);

const App = createAppContainer(MainNavigator);

export default (App);