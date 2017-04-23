//Import libraries for components
import React from 'react';
import { Text, View } from 'react-native';

//create Component
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

//export AlbumDetail
export default AlbumDetail;
