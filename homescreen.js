import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';
import logo from './logo.png';


class Homescreen extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       
          <View style={styles.textContainer}>

<Image source ={logo}

 style={{ height: 100, width: 260, }}
/>
          
          
            </View>


 

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
          <Image source ={{uri: 'https://www.755creditscore.com/wp-content/uploads/2019/05/get-started-button-e1528139954941.png'}}
 style={{ height: 50, width: 260, }}
/>
                </TouchableHighlight>
            </View>

 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },



   
});


export default Homescreen;
