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
  ImageBackground,Platform,Animated,Dimensions, ScrollView
} from 'react-native';
import logo from './logo.png';

 let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
class Home extends React.Component {

 

  render() {
    return (


      <View style={styles.container}>
       
          <View style={styles.textContainer}>

<Image source ={logo}

 style={{ height: 100, width: 260, }}
/>
          
          
            </View>


 

   <View style={styles.navbarContainer}>
<TouchableHighlight style={styles.navButton}
              onPress={() => this.props.navigation.navigate('Na')}
            >
<Text style={styles.navButtonText}>
N.A.
</Text>
</TouchableHighlight>

<TouchableHighlight style={styles.navButton1}
onPress={() => this.props.navigation.navigate('Sa')}
>
<Text style={styles.navButtonText}>
S.A.
</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.navButton2}
onPress={() => this.props.navigation.navigate('Eu')}
>
<Text style={styles.navButtonText}>
EU
</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.navButton3}
onPress={() => this.props.navigation.navigate('Asia')}
>
<Text style={styles.navButtonText}>
Asia
</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.navButton4}
onPress={() => this.props.navigation.navigate('Af')}
>
<Text style={styles.navButtonText}>
AF
</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.navButton5}
onPress={() => this.props.navigation.navigate('Ant')}
>
<Text style={styles.navButtonText}>
ANT 
</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.navButton6}
onPress={() => this.props.navigation.navigate('Aus')}
>
<Text style={styles.navButtonText}>
AUS
</Text>
</TouchableHighlight>
</View>

<View style={styles.feed}>
<ScrollView> 


<Image source ={{uri:'https://robbreportedit.files.wordpress.com/2020/03/aerial_view_1388012_high-1.jpg?w=1000'}}
 style={{ height: 200, width: 350 }}
/>
<Text style={styles.caption}>
MALDIVES
</Text>
<Image source ={{uri:'https://uploads.exoticca.travel/en_US/destination/poi/lamu.png'}}
 style={{ height: 200, width: 350 }}
/>
<Text style={styles.caption}>
LAMU
</Text>
<Image source ={{uri:'https://tr-images.condecdn.net/image/84NyMxn3ynA/crop/2040/f/16where-to-stay-cap-juluca-march-issue-feb19-richard-james-taylor.jpg'}}
 style={{ height: 200, width: 350 }}
/>
<Text style={styles.caption}>
ANGUILLA
</Text>

</ScrollView>

 </View> 
 <View style={styles.bottomNavbarContainer}>
 <Text style={styles.caption}>
Travel List 
</Text>
<TouchableHighlight
              onPress={() => this.props.navigation.navigate('List')}
            >
<Image source ={{uri:'https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/11-512.png'}}
 style={{ height: 40, width: 40 }}
/>
</TouchableHighlight>
 </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: '#fff',
    
    
  },


  navbarContainer: {
height: deviceHeight/10,
width: deviceWidth,
backgroundColor: 'orange',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
borderBottomWidth: 5,
borderColor: 'black',
},

navButton: {
height: deviceHeight/10,
width: deviceWidth/7,
backgroundColor: '#ffd185',
borderColor: 'brown',
borderWidth: 1,
alignItems: 'center',
justifyContent: 'center',
margin: 0,
},
navButton1: {
height: deviceHeight/10,
width: deviceWidth/7,
backgroundColor: '#77d353',
borderColor: 'brown',
borderWidth: 1,
alignItems: 'center',
justifyContent: 'center',
margin: 0,
},
navButton2: {
height: deviceHeight/10,
width: deviceWidth/7,
backgroundColor: '#3ecfc9',
borderColor: 'brown',
borderWidth: 1,
alignItems: 'center',
justifyContent: 'center',
margin: 0,
},
navButton3: {
height: deviceHeight/10,
width: deviceWidth/7,
backgroundColor: '#e95ec0',
borderColor: 'brown',
borderWidth: 1,
alignItems: 'center',
justifyContent: 'center',
margin: 0,
},
navButton4: {
height: deviceHeight/10,
width: deviceWidth/7,
backgroundColor: '#b8977e',
borderColor: 'brown',
borderWidth: 1,
alignItems: 'center',
justifyContent: 'center',
margin: 0,
},
navButton5: {
height: deviceHeight/10,
width: deviceWidth/7,
backgroundColor: '#97cce4',
borderColor: 'brown',
borderWidth: 1,
alignItems: 'center',
justifyContent: 'center',
margin: 0,
},
navButton6: {
height: deviceHeight/10,
width: deviceWidth/7,
backgroundColor: '#ff9052',
borderColor: 'brown',
borderWidth: 1,
alignItems: 'center',
justifyContent: 'center',
margin: 0,
},
navButtonText: {
fontSize: deviceHeight/40,
textAlign: 'center',
color: 'black',
fontWeight: 'bold',
},
feed:{
alignItems:'center',


},
bottomNavbarContainer:{
height: deviceHeight/10,
width: deviceWidth,
backgroundColor: 'orange',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'right',
borderBottomWidth: 5,
borderColor: 'black',
},
feed:{
height: 6*deviceHeight/10,
width: deviceWidth,
alignItems: 'center',
justifyContent: 'center',
textAlign:'center',
},
textContainer:{
height: deviceHeight/9,
width: deviceWidth,

flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',

},
   
});


export default Home;


