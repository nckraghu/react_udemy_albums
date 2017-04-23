//Android development

//Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header'

//Create a Component
const App = () => (
    <Header />
  );

AppRegistry.registerComponent('albums', () => App);
