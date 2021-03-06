import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    TextInput,
    View,
    ScrollView,
    Alert,
    AsyncStorage,
    Linking
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Button } from 'native-base';

import styles from '../global/styles';
GLOBAL = require('../global/constant');

export default class Login extends Component
{
  constructor() {
    super();
    this.state = {password: '' };
  }


  
  doLogin()
  {
    console.log(this.state.password);

    if(this.state.password===GLOBAL.PWD)
      {
        this.gotopage(); 
      }
    else 
    {
      Alert.alert("Wrong Credentials","password invalid")
    }
}


gotopage()
{
    Actions.secret();
}

  render()
  {
  return (

    <ScrollView style={styles.body} >
    
      <View style={styles.containerLogin}>

        <TextInput
          style={{height: 40}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password:text})}/>
        
       
          <Button 
                style={styles.button}
                onPress={() => this.doLogin()}>
            <Text>Login</Text>
          </Button>
       
        
      </View>
      </ScrollView>
  )
}
}
