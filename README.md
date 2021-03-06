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

#### 4.4.2 Create ToDoItemList Component with MockData

- Create `src/component/ToDoItemList.js`

```JavaScript
   import React, { Component } from 'react';
   import { FlatList } from 'react-native';
   import { ListItem, Icon } from 'react-native-elements';


   MOCK_DATA = [{title:'Buy shampoo'}, {title: 'Read a book'}, {title: 'Clean room'}, {title: 'Go city hall'}, {title: 'Thraw array tradh'}]; 

   class ToDoItemList extends Component {

      renderItem = ({ item }) => (
         <ListItem
               title={item.title}
               bottomDivider={true}
               rightIcon={
                  <Icon
                     name="done"
                     size={ 30 }
                     color='#1c388c'
                  />
               }
         />
      );
      
      render() {
         return(
               <FlatList
                  keyExtractor = {(item, index) => item.title}
                  data = { MOCK_DATA }
                  renderItem={this.renderItem}
               />
         );
      }
   }

   export default ToDoItemList;
```

- Modify `src/screens/home/Home.js` to display ToDoItemList in HomeScreen

```JavaScript
   // add import
   import ToDoItemList from '../../component/ToDoItemList';
   class Home extends Component {
      // ...other code
      render() {
        return (
            <View>
                <ToDoItemList/>
            </View>
        );
      }
   }
```

#### 4.4.3 Display Add Button in HomeScreen

- Modify `src/screens/home/Home.js` to display Add Button in HomeScreen

```JavaScript
   class Home extends Component {
      // ...other code
      render() {
        return (
            <View style={ styles.container }>
                <ToDoItemList/>
                <Icon
                    name="add-circle"
                    size={60}
                    color='#1c388c'
                    containerStyle={[{position: 'absolute', bottom: 30, right: 45}]}
                />
            </View>
        );
      }
   }

   // Add style
   const styles = StyleSheet.create({
      container: {
         flex: 1,
      },
   });

   export default Home;
```

#### Completed Sign-In UI
   
   ![home_screen](https://github.com/Hiromu0166/todo-app-client/wiki/images/home_screen.png)

### 4.5 Create Modal UI to add ToDo Item

#### 4.5.1 Create Modal Background

- Create `src/component/ModalBackground.js`

```JavaScript
   import React, { Component } from 'react';
   import { StyleSheet, View } from 'react-native';

   class ModalBackground extends Component {
      render() {
         return (
               <View
                  style={ styles.container }
               >
               </View>
         );
      }
   }

   const styles = StyleSheet.create({
      container: {
         width: 100 + '%',
         height: 100 + '%',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }
   });

   export default ModalBackground;
```

#### 4.5.2 Create Modal UI for add ToDo

- Create `src/component/ToDoItemAddModal.js`

```JavaScript
   import React , { Component } from 'react';
   import { Dimensions, Modal, StyleSheet, Text, TextInput,  View } from 'react-native';
   import { Button } from 'react-native-elements';
   import ModalBackground from './ModalBackground';

   const SCRENN_WIDTH = Dimensions.get('window').width;
   const SCRENN_HEIGHT = Dimensions.get('window').height;

   class ToDoItemAddModal extends Component {
      render() {
         return(
               <Modal
                  visible={true}
                  transparent={true}
               >
                  <ModalBackground/>
                  <View style={styles.modalContainer}>
                     <View style={styles.modalTitleArea}>
                           <Text style={[{color: '#ffffff'}, {fontWeight: 'bold'}]}>ADD ITEM</Text>
                     </View>
                     <View style={styles.textInputArea}>
                           <TextInput
                              value="Training in gym"
                           />
                     </View>
                     <View style={styles.buttonGroupArea}>
                           <View style={[styles.buttonArea, {borderRightWidth: 1}, {borderRightColor: '#1c388c'}]}>
                              <Button
                                 title="CANCEL"
                                 type="clear"
                                 titleStyle={[{color: '#1c388c'}, {fontSize: 15}]}
                                 buttonStyle={styles.button}
                              />
                           </View>
                           <View style={styles.buttonArea}>
                              <Button
                                 title="ADD"
                                 type="clear"
                                 titleStyle={[{color: '#1c388c'}, {fontSize: 15}]}
                                 buttonStyle={styles.button}
                              />
                           </View>
                     </View>
                  </View>
               </Modal>
         );
      }
   }

   const styles = StyleSheet.create({
      modalContainer: {
         flex: 1,
         flexDirection: 'column',
         borderRadius: 20,
         width: 80 + "%",
         height: SCRENN_HEIGHT*0.3,
         marginTop: SCRENN_HEIGHT*0.15,
         marginLeft: SCRENN_WIDTH*0.1,
         position:'absolute',
         backgroundColor: '#ffffff'
      },
      modalTitleArea: {
         width: 100 + "%",
         height: 20 + " %",
         borderTopStartRadius: 20,
         borderTopEndRadius: 20,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#1c388c',
      },
      textInputArea: {
         height: 60 + "%",
         borderBottomWidth: 1,
         borderBottomColor: '#1c388c',
         padding: 10,
      },
      buttonGroupArea: {
         flexDirection: 'row',
         width: 100 + "%",
         height: 20 + " %",
         borderBottomStartRadius: 20,
         borderBottomEndRadius: 20,
      },
      buttonArea: {
         width: 50 + "%",
         justifyContent: 'center',
         alignItems: 'center',
      },
      buttonContainerLeft: {
         width: 100 + "%",
         backgroundColor: 'red',
      },

   });

   export default ToDoItemAddModal;
```

#### Completed AddItemModal UI
   
   ![modal_add_item](https://github.com/Hiromu0166/todo-app-client/wiki/images/modal_add_item.png)

---
### 4.6 Create Modal UI to update ToDo Item

- Create `src/component/ToDoItemUpdateModal.js`

```JavaScript
   import React , { Component } from 'react';
   import { Dimensions, Modal, StyleSheet, Text, TextInput,  View } from 'react-native';
   import { Button } from 'react-native-elements';
   import ModalBackground from './ModalBackground';

   const SCRENN_WIDTH = Dimensions.get('window').width;
   const SCRENN_HEIGHT = Dimensions.get('window').height;

   class ToDoItemUpdateModal extends Component {
      render() {
         return(
               <Modal
                  visible={true}
                  transparent={true}
               >
                  <ModalBackground/>
                  <View style={styles.modalContainer}>
                     <View style={styles.modalTitleArea}>
                           <Text style={[{color: '#ffffff'}, {fontWeight: 'bold'}]}>UPDATE ITEM</Text>
                     </View>
                     <View style={styles.textInputArea}>
                           <TextInput
                              value="Buy sham"
                           />
                     </View>
                     <View style={styles.buttonGroupArea}>
                           <View style={[styles.buttonArea, {borderRightWidth: 1}, {borderRightColor: '#1c388c'}]}>
                              <Button
                                 title="CANCEL"
                                 type="clear"
                                 titleStyle={[{color: '#1c388c'}, {fontSize: 15}]}
                                 buttonStyle={styles.button}
                              />
                           </View>
                           <View style={styles.buttonArea}>
                              <Button
                                 title="UPDATE"
                                 type="clear"
                                 titleStyle={[{color: '#1c388c'}, {fontSize: 15}]}
                                 buttonStyle={styles.button}
                              />
                           </View>
                     </View>
                  </View>
               </Modal>
         );
      }
   }

   const styles = StyleSheet.create({
      modalContainer: {
         flex: 1,
         flexDirection: 'column',
         borderRadius: 20,
         width: 80 + "%",
         height: SCRENN_HEIGHT*0.3,
         marginTop: SCRENN_HEIGHT*0.15,
         marginLeft: SCRENN_WIDTH*0.1,
         position:'absolute',
         backgroundColor: '#ffffff'
      },
      modalTitleArea: {
         width: 100 + "%",
         height: 20 + " %",
         borderTopStartRadius: 20,
         borderTopEndRadius: 20,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#1c388c',
      },
      textInputArea: {
         height: 60 + "%",
         borderBottomWidth: 1,
         borderBottomColor: '#1c388c',
         padding: 10,
      },
      buttonGroupArea: {
         flexDirection: 'row',
         width: 100 + "%",
         height: 20 + " %",
         borderBottomStartRadius: 20,
         borderBottomEndRadius: 20,
      },
      buttonArea: {
         width: 50 + "%",
         justifyContent: 'center',
         alignItems: 'center',
      },
      buttonContainerLeft: {
         width: 100 + "%",
         backgroundColor: 'red',
      },

   });

   export default ToDoItemUpdateModal;
```

#### Completed UpdateItemModal UI
   
   ![modal_update_item](https://github.com/Hiromu0166/todo-app-client/wiki/images/modal_update_item.png)

---
## 5. Implement Add, Delete, Update ToDoItem using MobX

### 5.1 Setup

- Install MobX for state management

   `npm install --save mobx mobx-react`

- Install Type Script and modify setting file to remove `experimentalDecorators warning`

      `npm install --save-dev typescript`
   
      Make tsconfig.json

      `./node_modules/.bin/tsc --init`

      Change extension

      `mv App.js App.tsx`

      Add below option to `tsconfig.json` 

      ```
         "experimentalDecorators": true
         "allowJs": true
         "jsx": "preserve"
      ```

### 5.2 Implement Add ToDoItem Function

#### 5.2.1 Create todoItem model

- Create `src/model/ToDoItem.js`

```JavaScript
   class ToDoItem {
      id = '';
      title = '';
      finished = false;

      constructor(title) {
         this.id = this.generateId();
         this.title = title;
      }

      generateId = () => {
         return new Date().getTime().toString(16) + Math.floor(1000 * Math.random()).toString(16);
      }
   }

   export default ToDoItem;
```

