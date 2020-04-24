import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight} from 'react-native';
import logo from './logo.png';



class Email extends React.Component {
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
onChangeText={(name) => this.setState({name})}
value={this.state.name}
/>

<TextInput style={styles.searchInput}
onChangeText={(email) => this.setState({email})}
value={this.state.email}
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
              onPress={() => this.props.navigation.navigate('Pass')}
            >
          <Image source ={{uri: 'https://www.orangelabmedia.com/wp-content/uploads/2019/02/signup-button.png'}}
 style={{ height: 50, width: 200, }}
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


export default Email;
