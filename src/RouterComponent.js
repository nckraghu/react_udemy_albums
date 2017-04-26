import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AlbumList from './components/AlbumList';
import AlbumData from './components/AlbumData';

const RouterComponent = () => {
  return(
    <Router>
      <Scene key="albumList" component={AlbumList} title="Albums" />
      <Scene key="albumData" component={AlbumData} title="Album Info" />
    </Router>
  );
};

export default RouterComponent;
