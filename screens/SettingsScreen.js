import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { AppRegistry, Text, View, Button, Alert, StyleSheet} from 'react-native';



export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Child',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */



    return (

    	<View style = {styles.container}>
        <View style = {styles.buttonContainer}>

    		

	    	  <Button
  			 onPress={() => { Alert.alert('You Are Now Home')}}
  			 title="Check In!"
         color = "white"
  			 />
        </View>
	    </View>

    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 25,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 25,
    shadowOpacity: 0.25
  }
})