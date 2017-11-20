import React, { Component } from "react";

import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import {
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Keyboard,
  AsyncStorage,
  TouchableHighlight,
  Dimensions,
  Image
 } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

import { Container, Header, View, Fab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../global/styles';
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;
GLOBAL = require('../global/constant');

class Secret extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      title:'',
      counter:0
      
    };
  }

  getSecretList()
  {
    
  }

  componentWillMount()
  {
    this.getSecretList();
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
addSecret()
{
  saveitem(this.state.counter,this.state.title);
  this.setState({
    counter:this.state.counter+1
  })
}

  updateSecret()
  {}

  renderFooter = () => {
      if (!this.state.loading) return null;

      return (
        <View
          style={{
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}>
          <ActivityIndicator animating size="large" />
        </View>
      );
    };

  _onPress(ite)
  {
    GLOBAL.CID=ite.id;
    
    Actions.details();
  }

  _onPressEdit(item)
  {
    this.setState({
      title: item.title,
    });
    this.popupDialogUpdate.show();

  }

  _onPressDelete(item)
  {}
  render()
  {
    return(

      <View style={{flex:1}}>
      <List
        style={styles.body}
        containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.data}
            renderItem={
              ({ item }) =>
              (
              <TouchableOpacity onPress={() => this._onPress(item)}>
              <ListItem 
                style = {styles.list}
                title=
                {
                  <Text style={styles.listTitleWhite}> hi </Text>
                }
                rightIcon={
                  <View style={{flexDirection:'row'}}>
                  {
                    renderIf(item.editable)
                    (
                      <TouchableOpacity onPress={() => this._onPressEdit(item)}>
                        <Image
                        source={require('../img/edit.png')}
                        style={styles.rightIconStyle}
                      />
                    </TouchableOpacity>
                    )
                  }

                  {
                    renderIf(item.editable)
                    (
                      <TouchableOpacity onPress={() => this._onPressDelete(item)}>
                        <Image
                          source={ require('../img/delete.png')}
                          style={styles.rightIconStyle}/>
                      </TouchableOpacity>
                    )
                  }
                </View>
                }
                />
              </TouchableOpacity>
            )
          }
            keyExtractor={item => item.id}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}/>
        </List>

        <Fab
          style={{ backgroundColor: '#99c2ff' }}
          position="bottomRight"
          onPress={() => this.popupDialog.show()}>
          
          <Text>+</Text>
          </Fab>
       
        <PopupDialog
          dialogStyle=
          {{
            padding:5,
            position: 'absolute',
            alignSelf:'center',
            width:'80%',
            height:(aspectRatio>1.6)?'35%':'25%',
            top: 15,
            zIndex: 1
          }}
          dialogTitle={<DialogTitle title="Add Secret" />}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
            
            <View>

              <TextInput
                style={{height: 40}}
                selectionColor="#f66e09"
                keyboardType= 'default'
                placeholder="Secret Title"
                onChangeText={(text) => this.setState({title:text})}
              />

            </View>

            <View style={styles.buttonView}>
              <Button
                onPress={
                  () => this.addSecret()
                }
                style={styles.dialogButton}
                >
                <Text>OK</Text>
              </Button>

              <Button
                onPress={() => this.popupDialog.dismiss()}
                style={styles.dialogButton}>

                <Text>Cancel</Text>
              </Button>
            </View>

        </PopupDialog>

        <PopupDialog
            dialogStyle=
            {{
              padding:5,
              flex:1,
              position: 'absolute',
              alignSelf:'center',
              width:'80%',
              height:(aspectRatio>1.6)?'45%':'25%',
              top: 15,
              zIndex: 1
            }}
            dialogTitle={<DialogTitle title="Update Secret" />}
            ref={(popupDialogUpdate) => { this.popupDialogUpdate = popupDialogUpdate; }}>
            <View>

              <TextInput
                style={{height: 40}}
                selectionColor="#f66e09"
                keyboardType= 'default'
                value={this.state.title}
                placeholder="Secret Title"
                onChangeText={(text) => this.setState({title:text})}
              />

             </View>

            <View style={styles.buttonView}>
              <Button
                onPress={
                  () => this.updateSecret()
                }
                style={styles.dialogButton}
                title="OK">
                <Text>OK</Text>
              </Button>

              <Button
                onPress={() => this.popupDialogUpdate.dismiss()}
                  style={styles.dialogButton}
                  title="Cancel">
                    <Text>Cancel</Text>
              </Button>
            </View>

        </PopupDialog>

        </View>
      );
    }
  }

export default Secret;
