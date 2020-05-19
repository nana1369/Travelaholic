import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight} from 'react-native';
import logo from './logo.png';



class List extends React.Component {
state={
  place1:'',
  place2:'',
  place3: '',
  place4: '',
  place5:'',
  place6:'',
 
 
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
<Text style={styles.title}>
My Travel List 
</Text>
<TextInput style={styles.searchInput}
onChangeText={(place1) => this.setState({place1})}
value={this.state.place1}
/>

<TextInput style={styles.searchInput}
onChangeText={(place2) => this.setState({place2})}
value={this.state.place2}
/>
<TextInput style={styles.searchInput}
onChangeText={(place3) => this.setState({place3})}
value={this.state.place3}
/>

<TextInput style={styles.searchInput}
onChangeText={(place4) => this.setState({place4})}
value={this.state.place4}
/>
<TextInput style={styles.searchInput}
onChangeText={(place5) => this.setState({place5})}
value={this.state.place5}
/>
<TextInput style={styles.searchInput}
onChangeText={(place6) => this.setState({place6})}
value={this.state.place6}
/>


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
title:{
fontSize:25,
fontWeight:'bold',
},


});


export default List;
