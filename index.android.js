//Android development

//Import a library to help create a Component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

//Create a Component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText="Albums" />
      <AlbumList />
    </View>
  );

AppRegistry.registerComponent('albums', () => App);
