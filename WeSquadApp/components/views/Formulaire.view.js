import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  TextInput,
  View, 
  Image, 
  TouchableOpacity,
  Button 
} from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { HomeScreen } from '../views/MainScreen.view';
import { styles } from '../../components/css/css';
import { FormLabel, FormInput, FormValidationMessage,  } from 'react-native-elements'




export class FormulaireScreen extends React.Component {
  static navigationOptions = {
    title: 'Formulaire',
  };
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);    
  }
  focusTextInput() {
    this.textInput.current.focus();
  }
   
    render() {
      const { navigate } = this.props.navigation;
      
      
      return (
        <View style={styles.viewStyle}>
          <FormLabel>Nom</FormLabel>
          <FormInput 
            style={styles.inputCandidats} 
            ref={this.textInput}
          />
          <FormLabel>Prénom</FormLabel>
          <FormInput 
            style={styles.inputCandidats}
            ref={this.textInput}
          />
          <FormLabel>Mail</FormLabel>
          <FormInput 
            style={styles.inputCandidats}
            ref={this.textInput}
          />
          <TouchableOpacity          
            style={styles.buttonWeSquad} 
            onPress={() => navigate('Home')}
          > 
            <Text style={styles.weSquadText}>
              Envoyer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
          >
          <Text style={styles.weSquadText}>
              Envoyer
          </Text>
          </TouchableOpacity>
        </View>

      );
    }
} 