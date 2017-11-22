/**
 * rn-drawer example app
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {AppRegistry,ActivityIndicator, NativeModules, AsyncStorage, Text, View , Alert , Image,TouchableHighlight,TouchableOpacity,Dimensions} from 'react-native';

import { Router, Scene,Stack } from 'react-native-router-flux';
import { Actions , ActionConst } from 'react-native-router-flux';


import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Secret from './screens/Secret';

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;

import styles from './global/styles';
GLOBAL = require('./global/constant');
//var controlPanel='';

let counter = 0;
const screenSize = Dimensions.get('window');

export default class App extends Component {


constructor(props, context) {
  super(props, context);
  this.state = {
    hasToken: false,
    isLoaded:false
  };
}

componentWillMount()
{

  AsyncStorage.getItem('password').then((password) =>
  {
    GLOBAL.PWD=password;
    console.log("Password", password);
    this.setState({ hasToken: password !== null,isLoaded:true })
  });
}

renderLoading = () => 
{
  if (this.state.isLoaded) return null;

  return (
    <View
      style=
      {{
        paddingVertical: 20,
        flex:1,
        justifyContent:'center',
      }}>
      <ActivityIndicator animating size="large"/>
    </View>
  );
}

  render()
  {
    if (!this.state.isLoaded)
    {
      return (this.renderLoading())
    }
    else
    {
      return (  
          <Router>
            <Scene 
              key="root">

                <Scene
                  component={SignUp}
                  title='Secure Secret'
                  key='signup'
                  hideNavBar={false}
                  initial={this.state.hasToken}
                  titleStyle={styles.loginTitleStyle}
                  backButtonImage={require('./img/left.png')}
                  navigationBarStyle={styles.navBarStyle}/>
                
                
                <Scene
                  component={Login}
                  hideNavBar={false}
                  key='login'
                  title='Login'
                  initial={!this.state.hasToken}
                  backButtonImage={require('./img/left.png')}
                  titleStyle={styles.titleStyle} 
                  direction={ 'horizontal' }
                  navigationBarStyle={styles.navBarStyle}/>
                
                <Scene
                  component={Secret}
                  hideNavBar={false}
                  key='secret'
                  title='Secrets'
                  titleStyle={styles.titleStyle} 
                  backButtonImage={require('./img/left.png')}
                  direction={ 'horizontal' }
                  navigationBarStyle={styles.navBarStyle}/>                
                  </Scene>
           </Router>

      );
    }
  }
  
}


