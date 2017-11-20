
import {StyleSheet,Platform,Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;

module.exports = StyleSheet.create({
  button: 
  {
    backgroundColor : "#99c2ff",
    borderColor : '#3385ff',
    borderWidth : 2,
    marginTop: 20 ,
    marginBottom: 20 ,
    padding:5,
    width:'100%',
    marginLeft: (aspectRatio>1.6)?50:150 ,
    marginRight: (aspectRatio>1.6)?50:150 ,
    alignSelf:'center',
    justifyContent:'center',
    alignContent : 'center',
  },
  dialogButton:
  {
    backgroundColor : "#99c2ff",
    alignSelf:'center',
    justifyContent:'center',
    alignContent : 'center',
    borderColor : '#3385ff',
    borderWidth : 2,
    height:40,
    width:(aspectRatio>1.6)?'25%':'20%', 
    margin:10
  },
  buttonView:
  {
    justifyContent: 'center',
    flexDirection: 'row', 
    alignItems:'center'
  },
  list: 
  {
    backgroundColor : "#99c2ff",
    marginTop: 10 ,
    marginBottom: 5 ,
    marginLeft: 5 ,
    marginRight: 5 ,
    borderColor : '#99c2ff',
    borderWidth : 2,
    alignContent : 'center',
    justifyContent:'center',
    borderRadius : 5,
    height: 50,
    flex:1,
  },

  listNotes: 
  {
    backgroundColor : "#99c2ff",
    marginTop: 10 ,
    marginBottom: 5 ,
    marginLeft: 5 ,
    marginRight: 5 ,
    borderColor : '#99c2ff',
    borderWidth : 2,
    alignContent : 'center',
    justifyContent:'center',
    borderRadius : 5,
    flex:1,
  },

  buttonTwo: 
  {
    backgroundColor : "#fff",
    marginTop: 10 ,
    marginBottom: 10 ,
    marginLeft: 50 ,
    marginRight: 50 ,
    borderColor : '#ffffff',
    borderBottomColor : '#3385ff',
    borderWidth : 1,
  },
  buttonTwoText:
  {
    fontSize: 15 ,
    color: '#3385ff'
  },
  container:
  {
      padding : 10,
      backgroundColor: '#fff'
  },
  containerLogin:
  {
        padding : 10,
        backgroundColor: '#fff'
  },
  labelStyle:
  {
    color: '#3385ff',
  },
  body:
  {
      backgroundColor: '#fff',
      height: '100%',
      width : 'auto',
      paddingTop: 20 ,
      padding: 10,
      marginBottom:10
  },
  header: {
    paddingTop: 10,
    height:20,
    borderBottomColor: '#ff00ff',
    borderBottomWidth: 1
  },
menuIcon: 
{
  marginRight: (Platform.OS === 'ios') ? 20 : 10,
  marginLeft:(Platform.OS === 'ios') ? 0 : 30,
  paddingLeft:10,
  marginBottom:(Platform.OS === 'ios') ? 20 :0,
  width: 26,
  height: 26,
},

navBarStyle:
{
  backgroundColor: '#99c2ff',
  paddingTop:10
},

content:
{
  flex:1,
  flexDirection:'row',
  padding:5,
  paddingTop:20,
  alignItems:'center'
},
titleStyle:
  {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 20,
    marginRight: (Platform.OS === 'ios') ? 20 : 10,
    marginLeft:(Platform.OS === 'ios') ? 0 : 30,
    paddingLeft:10,
    marginBottom:(Platform.OS === 'ios') ? 20 :0,
    width: '100%',
    marginTop:10
  },
loginTitleStyle:
  {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 20,
    width: '100%',
  },
  myImageStyle:
  {
      height: 10,
      width : 10,
      marginTop:25,
      marginBottom:25,
  },

  listTitle: {
    fontSize: 20,
    marginLeft:150,
    marginTop:20,
    marginBottom:40,
    fontWeight: '300',
    position:'relative',

  },
  listTitleWhite: {
    fontSize: 18,
    color : '#ffffff'
  },
  listTitleBlack: {
    fontSize: 18,
    color : '#000000',
  },
  titleBlack: {
    fontSize: 20,
    color : '#3385ff',
  },
  listSubTitle: {
    fontSize: 15,
    color: '#3385ff',
    marginLeft:150

  },
  listBookTitle: {
    fontSize: 15,
    marginTop:80,
    zIndex:1,
    color:'#000000',
    fontWeight: '300',

  },
  listSubSubTitle: {
    fontSize: 12,
    color: '#3385ff',
    justifyContent:'center',
  },
  listBookSubTitle: {
    fontSize: 15,
    color: '#3385ff',
},
rightIconStyle:
{
  width: 30,
  height: 30,
  marginRight : 7,
  justifyContent: 'center',
  alignItems: 'center',

},
rightIconMyStyle:
{
  width: 30,
  height: 30,
  marginRight : 7,
  marginTop : 50,
  justifyContent: 'center',
  alignItems: 'center',

},
leftIconStyle:
{
  width: 25,
  height: 25,
  marginRight : 7,
  justifyContent:'center'
},
calIconStyle:
{
  width: 45,
  height: 45,
  marginLeft : 150,
  
  justifyContent:'center'
},

});
