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

---
### 4.2 Implement Sign-In UI

![Sign-In Screen Task](https://drive.google.com/uc?export=view&id=1Ra9ppsDzLAgd3oOQmEwU-BQMX0V7wFrZ "Sign-In Screen Task")

#### 4.2.1 Change Header Color

- Add defaultNavigationOptions to `App.js`
   ``` JavaScript
      ... other Code
      initialRouteName: "SignInScreen",
      // Add Below Code
      defaultNavigationOptions: {
         headerStyle: {
         backgroundColor: '#1c388c',
         },
      },
      ... other Code
   ```

#### 4.2.2 Place "SIGN IN" Label

- Define styleSheet and apply it to `SignIn.js'.

   ``` JavaScript
   import React, { Component } from 'react';
   import { Button, Text, View, StyleSheet } from 'react-native';

   class SignIn extends Component {
      render() {
         return (
               <View style={styles.container}>
                  <View style={styles.textArea}>
                     <Text style={styles.text}>SIGN IN</Text>
                  </View>
                  <Button
                     title="Move to Home Screen"
                     onPress={() => this.props.navigation.navigate('HomeScreen')}
                     containerStyle={[{ margin: 5 }]}
                  />
                  <Button
                     title="Move to Sign Up Screen"
                     onPress={() => this.props.navigation.navigate('SignUpScreen')}
                     containerStyle={[{ margin: 5 }]}
                  />
               </View>
         );
      }
   }

   const styles = StyleSheet.create({
      container: {
         flex: 1,
      },
      textArea: {
         alignItems: 'center',
         padding: 15,
      },
      text: {
         fontSize: 25,
      }
   })

   export default SignIn;
   ```

#### 4.2.3 Create Input Component

- Create Input Componenet at `src/component/InputFieldWithIcon.js`

   ```JavaScript
   import React, { Component } from 'react';
   import PropTypes from 'prop-types';
   import { View, StyleSheet } from 'react-native';
   import { TextField } from 'react-native-material-textfield';
   import {  Icon } from 'react-native-elements';

   class InputFieldWithIcon extends Component{
      render() {
         const {fieldName, iconName} = this.props;
         return(
               <View style={styles.container}>
                  <View style={styles.iconArea}>
                     <Icon 
                           name={iconName}
                           size={40}
                           color='#1c388c'
                     />
                  </View>
                  <View style={styles.inputArea}>
                     <TextField
                           label={fieldName}
                           value=''
                           labelHeight={28}
                           containerStyle={{ position: 'absolute', top: 0, bottom: 0, left: 10, right: 0, }}
                     />
                  </View>
               </View>
         );
      }
   }

   InputFieldWithIcon.prototypes = {
      fieldName: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
   };

   const styles = StyleSheet.create({
      container: {
         flexDirection: 'row',
         height: 65,
      },
      iconArea: {
         width: 20 + "%",
         justifyContent: 'center',
         alignItems: 'center',
      },
      inputArea: {
         width: 70 + "%",
      },
   });

   export default InputFieldWithIcon;
   ```

- Place Input Components(UserName and Password) in `src/screens/sign-in/SignIn.js`

   ``` JavaScript
   ... other Code
   // Place two input components below sign-in label
   <View style={styles.textArea}>
      <Text style={styles.text}>SIGN IN</Text>
   </View>
   <InputFieldWithIcon
      fieldName='USER NAME'
      iconName='person'
   />
   <InputFieldWithIcon
      fieldName='PASSWORD'
      iconName='vpn-key'
   />
   ...other Code
   ```

#### 4.2.4 Place Button Component

I use a existing button component(React Native Elements) to implement Signin and Sign up button. 

- Place button Components(Signin and Sign up) and apply styles in `src/screens/sign-in/SignIn.js`

   before
   ```JavaScript
      <Button
         title="Move to Home Screen"
         onPress={() => this.props.navigation.navigate('HomeScreen')}
         containerStyle={[{ margin: 5 }]}
      />
      <Button
         title="Move to Sign Up Screen"
         onPress={() => this.props.navigation.navigate('SignUpScreen')}
         containerStyle={[{ margin: 5 }]}
      />
   ```

   after
   ```JavaScript
      // add import
      import { Button } from 'react-native-elements';
      // ...other code
      <Button
         title="SIGN IN"
         buttonStyle={styles.button}
         containerStyle={[{margin: 50}]}
         onPress={() => this.props.navigation.navigate('HomeScreen')}
      />
      <Button
         title="SIGN UP"
         buttonStyle={styles.button}
         containerStyle={[{marginHorizontal: 50}]}
         onPress={() => this.props.navigation.navigate('SignUpScreen')}
      />
      // ...other code
      const styles = StyleSheet.create({
         // add below style
         button: {
            backgroundColor: '#1c388c',
            height: 60,
            borderRadius: 10
         }
      });
   ```
  
#### Completed Sign-In UI
   
   ![signin_screen](https://github.com/Hiromu0166/todo-app-client/wiki/images/signin_screen.png)
   
---
### 4.3 Implement Sign-Up UI
![Sign-Up Task](https://github.com/Hiromu0166/todo-app-client/wiki/images/signup_screen_task.png)

- Modify `src/screens/sign-up/SignUp.js`

   ```JavaScript
      import React, { Component } from 'react';
      import { Text, View, StyleSheet } from 'react-native';
      import { Button, Icon } from 'react-native-elements';
      import InputFieldWithIcon from '../../component/InputFieldWithIcon';

      class SignUp extends Component {

         static navigationOptions = ( {navigation} ) => ({
            headerRight: null,
            headerLeft: 
                  <Icon 
                     name='arrow-back'
                     color='white'
                     size={35}
                     containerStyle={[{marginLeft: 10}]}
                     onPress={() => {navigation.navigate('SignInScreen')}} 
                  />,
         });

         render() {
            return (
                  <View style={styles.container}>
                     <View style={styles.textArea}>
                        <Text style={styles.text}>SIGN UP</Text>
                     </View>
                     <InputFieldWithIcon
                        fieldName='USER NAME'
                        iconName='person'
                     />
                     <InputFieldWithIcon
                        fieldName='PASSWORD'
                        iconName='vpn-key'
                     />
                     <InputFieldWithIcon
                        fieldName='RE-TYPE PASSWORD'
                        iconName='vpn-key'
                     />
                     <Button
                        title="REGISTER"
                        buttonStyle={styles.button}
                        containerStyle={[{margin: 50}]}
                     />
                  </View>
            );
         }
      }

      const styles = StyleSheet.create({
         container: {
            flex: 1,
         },
         textArea: {
            alignItems: 'center',
            padding: 15,
         },
         text: {
            fontSize: 25,
         },
         button: {
            backgroundColor: '#1c388c',
            height: 60,
            borderRadius: 10
         }
      })

      export default SignUp;
   ```

#### Completed Sign-Up UI

   ![signup_screen](https://github.com/Hiromu0166/todo-app-client/wiki/images/signup_screen.png)

---
### 4.4 Implement Home UI

![Home Screen Task](https://github.com/Hiromu0166/todo-app-client/wiki/images/home_screen_task.png)

#### 4.4.1 Display Title and Logout Button in Header

- Modify `src/screens/home/Home.js`

```JavaScript
   // add import
   import { Icon } from 'react-native-elements';
   class Home extends Component {
      // add bellow
      static navigationOptions = ( {navigation} ) => ({
        title: 'INBOX',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerLeft: null,
        headerRight:
            <Icon
                name='exit-to-app'
                color='white'
                size={30}
                containerStyle={[{marginRight: 10}]}
                onPress={() => {navigation.navigate('SignInScreen')}}
            />
         // ...other code
    });
   }
```