***
# Function
- Sign-In
- Sign-Up
- View-ToDoItemList
- Add-ToDoItem
- Done-ToDoItem
- Modify-ToDoItem

---

# Architecture
![Architecture](https://drive.google.com/uc?export=view&id=17kat1ejFXlyhnoybE3n1M3c9FqeTXVrF "Architecture")

---
# Development Process

## 1. UI Design(WireFrame)
- **Sign In/Up Screen**

   ![Sign In/Up Screen](https://drive.google.com/uc?export=view&id=1D2GGIX7-MYbWFHY26OMm7U62YO-uqbvt "Sign In/Up Screen")

- **Home Screen**

   ![Home Screen](https://drive.google.com/uc?export=view&id=1AluR4TqqSDAdgvp2bbw8hMZKYs-2t2V1 "Home Screen")

---
### 2.1 Setup React Native Project

- Install Expo CLI

   `npm install -g expo-cli`

- Create project

   `expo init todo-app-client`

   Choose `blank` when you're asked template.

- Start app

   `npm start`

   You can see running app with your mobile phone, if you install `expo-cli`.

- Make `.gitignore`
   ```.gitignore
      /node_modules
   ```

---
## 3. Rooting

### 3.1 Make Screen Transition Diagram

   ![Screen Transition Diagram](https://drive.google.com/uc?export=view&id=1evLn7noiqVFz7oanRDpmxPemQmuzsm8y "Screen Transition Diagram")

---
### 3.2 Install React Navigation

- `npm install --save react-navigation`

   (Click [here](https://reactnavigation.org/en/) if you learn details about react-navigation.)

---
### 3.3 Implement Rooting
- Modify App.js
   ``` JavaScript
   import {createStackNavigator, createAppContainer} from 'react-navigation';
   import SignInScreen from './src/screens/sign-in/SignIn';
   import SignUpScreen from './src/screens/sign-up/SignUp';
   import HomeScreen from './src/screens/home/Home';

   const MainNavigator = createStackNavigator(
   {
      // Define Screen Components
      SignInScreen: {screen: SignInScreen},
      SignUpScreen: {screen: SignUpScreen},
      HomeScreen: {screen: HomeScreen},
   },
   {
      // Define initial route in a stack 
      initialRouteName: "SignInScreen",
   },
   );

   const App = createAppContainer(MainNavigator);

   export default(App);

   ```

- Create Temporary Screens(Sign-In, Sign-Up, Home).
   - src/screens/sign-in/SignIn.js

   ``` JavaScript
      import React, { Component } from 'react';
      import { Button, Text, View } from 'react-native';

      class SignIn extends Component {
         render() {
            return (
                  <View>
                     <Text>Here is SignIn Screen</Text>
                     <Button
                        title="Move to Home Screen"
                        // Move to Home Screen when Button is pressed.
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                        containerStyle={[{margin: 5}]}
                     />
                     <Button
                        title="Move to Sign Up Screen"
                        // Move to SignUp Screen when Button is pressed.
                        onPress={() => this.props.navigation.navigate('SignUpScreen')}
                        containerStyle={[{margin: 5}]}
                     />
                  </View>
            );
         }
      }
      export default SignIn;
   ```
   - src/screens/sign-up/SignUp.js
   ``` JavaScript
      import React, { Component } from 'react';
      import { Text, View } from 'react-native';

      class  SignUp extends Component {
         render() {
            return (
               <View>
                  <Text>Here is SignUp Screen</Text>
               </View>
            );
         }
      }
      export default SignUp;
   ```
   - src/screens/home/Home.js
   ``` JavaScript
      import React, { Component } from 'react';
      import { Text, View } from 'react-native';
      
      class Home extends Component {
         render() {
            return (
                  <View>
                     <Text>Here is Home Screen</Text>
                  </View>
            );
         }
      }

      export default Home;

   ```

- Deliverables until now

   ![demo](https://github.com/Hiromu0166/todo-app-client/wiki/images/rooting.gif)

---
## 4. Implement Screens UI

### 4.1 Install UI libraries

- [React Native Elements](https://react-native-training.github.io/react-native-elements/)

   `npm install --save react-native-elements`

- [React Native Material TextField](https://github.com/n4kz/react-native-material-textfield)

   `npm install --save react-native-material-textfield`
