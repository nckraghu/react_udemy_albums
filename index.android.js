//Android development

//Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a Component
const App = () => (
    <Text>Hello World!</Text>
  );

AppRegistry.registerComponent('albums', () => App);
