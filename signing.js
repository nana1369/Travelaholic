import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight} from 'react-native';
import logo from './logo.png';



class SignIn extends React.Component {
state={
  name:'name',
  email:'email',
  username: 'username',
    password: 'password',
}


  render() {
     
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>

<View style={styles.textContainer}>

<Image source ={logo}
 style={{ height: 100, width: 260, justifyContent: 'center', margin: 40, alignContent: 'center' }}
/>

<TextInput style={styles.searchInput}
onChangeText={(username) => this.setState({username})}
value={this.state.username}
/>

<TextInput style={styles.searchInput}
onChangeText={(password) => this.setState({password})}
value={this.state.password}
/>
</View>

         
          
           <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Home')}
            >
          <Image source ={{uri: 'https://portal.graebel.com/SiteAssets/SitePages/Home/login.png?Mobile=1&Source=%2F%5Flayouts%2F15%2Fmobile%2Fviewa%2Easpx%3FList%3D4e9ba999%2Ddb99%2D4f8b%2D83d3%2Dfed57bbe0de0%26View%3Dd760485e%2D9343%2D4ee4%2D93a2%2D98ad61e2c2e2%26RootFolder%3D%252FSiteAssets%252FSitePages%252FHome%26FolderCTID%3D0x012000C248DDABF488AD46B3F69D4D5415F646%26wdFCCState%3D1'}}
 style={{ height: 40, width: 180, }}
/>
                </TouchableHighlight>
            </View>
            
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

}





const styles = StyleSheet.create({

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

searchInput: {
  height: 50,
  width: 200,
  borderColor:'#dedede',
  borderWidth: 2,
  color:'orange',
  fontSize: 12,
  textAlign:'center',
  margin: 10,
  backgroundColor:'#f5f5f5',
  borderRadius: 10,
  
},
loginScreenContainer: {
  flex: 1,
},
loginFormView: {
  flex: 1
},

});


export default SignIn;
