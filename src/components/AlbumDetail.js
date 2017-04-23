//Import libraries for components
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

//create Component
const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

//export AlbumDetail
export default AlbumDetail;
