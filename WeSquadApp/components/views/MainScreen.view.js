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
import { FormulaireScreen } from '../views/Formulaire.view';
import { styles } from '../../components/css/css';




export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Mainscreen',
  };
      render () {
        const { navigate } = this.props.navigation;
        let pic = {
          uri: 'https://media.licdn.com/dms/image/C560BAQFgxJN3xSP27Q/company-logo_200_200/0?e=2125872000&v=beta&t=iyqxe7dNp07FMi8H8G16h-WR6NT6A84EJa4Lpo4YVsY'
        };
        let picSouris = {
          uri: 'https://media.ldlc.com/ld/products/00/04/34/39/LD0004343972_2.jpg'
        };
        return (     
          
            <View style={styles.viewStyle}>      
                     
              <Text>
                <Image source={pic} style={styles.weSquadImg}/>
                <Text style={styles.weSquadTitle}> We
                  <Text style={{color:"#2AA4E3"}}>Squad</Text> Lottery !
                </Text>
              </Text>

              <Text style={styles.weSquadText}>
              Inscrivez-vous pour tenter votre chance !
              </Text>

              <Image source={picSouris} style={styles.picSouriss}/>

              <TouchableOpacity          
                style={styles.buttonWeSquad} 
                onPress={() => navigate('Formulaire')}
                > 
                <Text style={styles.weSquadText}>
                Par ici pour s'inscrire !
                </Text>
              </TouchableOpacity>
            </View>   
          );
        }
}