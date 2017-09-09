import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { AppRegistry, Text, View } from 'react-native';


import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAaU9WGnCiUtXK5piych-okQngLUxSjBqI",
  authDomain: "curfew-81f8f.firebaseapp.com",
  databaseURL: "https://curfew-81f8f.firebaseio.com/",
  storageBucket: "curfew-81f8f.appspot.com"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();
var childArray = new Array(); 
childArray = [{name: "Emily", value: "alsoEmily"}, {name: "Abby", value: "alsoAbby"}];
var childArray2 = database.ref('parents/Sue');
firebase.database().ref('parents/Sue/Emily').set({name: "NotEmily"});

export default class LinksScreen extends React.Component {
  static navigationOptions = { 
    title: 'Parents',
  };

  render() {
    
    return (

      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <Text> {childArray[0].name} </Text>
          <Text> {childArray[1].name} </Text>
          <Text> bob </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
