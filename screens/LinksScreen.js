import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

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

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
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
