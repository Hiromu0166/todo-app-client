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


## 3. Implement Rooting

### 3.1 Make Screen Transition Diagram

   ![Screen Transition Diagram](https://drive.google.com/uc?export=view&id=1evLn7noiqVFz7oanRDpmxPemQmuzsm8y "Screen Transition Diagram")

### 3.2 Install React Navigation

- `npm install --save react-navigation`

   (Click [here](https://reactnavigation.org/en/) if you learn details about react-navigation.)