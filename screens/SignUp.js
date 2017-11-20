import React, { Component } from 'react';
import { AppRegistry, AsyncStorage ,Text, TextInput, View, ScrollView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button } from 'native-base';

GLOBAL = require('../global/constant');
import styles from '../global/styles';
export default class SignUp extends Component {

  constructor() {
    super();
    this.state = { password: '', confirmPassword: ''};
  }

  async saveItem(item, selectedValue)
  {
    console.log("item", item);
    console.log("selectedValue",selectedValue);
     try
     {
       await AsyncStorage.setItem(item, selectedValue);
     }
     catch (error) {
       console.error('AsyncStorage error: ' + error.message);
     }
   }


    doRegister()
    {
        pwd=this.state.password;
        console.log("PKj",pwd);
        //console.log((this.state.name)===''));
        //console.log(response);
        if(this.state.password===this.state.confirmPassword
            &&(!((this.state.password)==='')))
        {
            console.log("Saving");
            this.saveItem('password', this.state.password);
            this.gotopage();
        }

        else 
        {
            Alert.alert("Password Invalid","Password doesnt match confirm password ")
        }

    }

    gotopage()
    {
        Actions.secret();
    }

    render() {
    return (

         
        <View style={styles.container}>

        <Text>Enter password to save your secrets </Text>

        <TextInput
            style={{height: 40}}
            placeholder="Password"
            secureTextEntry={true}
            maxLength = {50}
            onChangeText={(text) => this.setState({password:text})}/>

            <TextInput
                style={{height: 40}}
                placeholder="Confirm Password"
                secureTextEntry={true}
                maxLength = {50}
                onChangeText={(text) => this.setState({confirmPassword:text})}/>

        
            <Container>
            
            <Button 
                style={styles.button}
                onPress={() => this.doRegister()}>
            <Text>Register</Text>
          </Button>
       
      </Container>
    

        </View>
    )
}
}
