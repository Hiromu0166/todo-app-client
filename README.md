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
# Task

 - [x] Make WireFrame
 - [ ] Sign-Up
    - [ ] Make a Sign-Up Screen
    - [ ] Link Firebase
 - [ ] Sign-In
    - [ ] Make a Sign-In Screen
    - [ ] Move to MainScreen when registered user Sign-in
 - [ ] View-ToDoItemList
    - [ ] Setup DB and insert mock-data
    - [ ] Implement API to return ToDoItemList
    - [ ] Make a Screen
    - [ ] Authentification by JWT in Request Header.
 - [ ] Add-ToDoItem
    - [ ] Implement API to add ToDoItem
    - [ ] Make a Screen
 - [ ] Delete-ToDoItem
    - [ ] Implement API to delete ToDoItem
    - [ ] Make a Screen
 - [ ] Modify-ToDoItem
    - [ ] Implement API to modify ToDoItem
    - [ ] Make a Screen


---
# Development Process

## 1. UI Design(WireFrame)
- **Sign In/Up Screen**

   ![Sign In/Up Screen](https://drive.google.com/uc?export=view&id=1D2GGIX7-MYbWFHY26OMm7U62YO-uqbvt "Sign In/Up Screen")

- **Home Screen**

   ![Home Screen](https://drive.google.com/uc?export=view&id=1AluR4TqqSDAdgvp2bbw8hMZKYs-2t2V1 "Home Screen")

---
## 2. Implement Rooting
### 2.1 Setup React Native Project

- Install Expo CLI

   `npm install -g expo-cli`

- Create project

   `expo init todo-app-client`

   > Choose `blank` when you're asked template.

- Start app

   `npm start`

   > You can see running app with your mobile phone, if you install `expo-cli`.

- Make `.gitignore`
   ```.gitignore
      /node_modules
   ```
- Install libraries
   - React Navigation to implement navigation Between Screens.
   (Click [here](https://reactnavigation.org/en/) if you learn details about react-navigation.)

      `npm install --save react-navigation`