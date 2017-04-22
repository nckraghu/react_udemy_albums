//Android development

//Import a library to help create a Component
import React from 'react';
import ReactNative from 'react-native';

//Create a Component
const App = () => {
  return (
    <ReactNative.Text>Hello World!</ReactNative.Text>
  );
};

ReactNative.AppRegistry.registerComponent('albums', () => App);
