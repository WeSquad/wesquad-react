import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  TextInput,
  View, 
  Image, 
  Button, 
  TouchableOpacity 
} from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { styles } from './components/css/css';
import { HomeScreen } from './components/views/MainScreen.view';
import { FormulaireScreen } from './components/views/Formulaire.view';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Formulaire: FormulaireScreen, 
  },
  {
    initialRouteName: 'Home',
  }
);


export default  class App extends React.Component {  
  render () {
   return(
    <RootStack />
       );
  }  
}
  
      