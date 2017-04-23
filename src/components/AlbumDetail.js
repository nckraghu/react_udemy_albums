//Import libraries for components
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//create Component
const AlbumDetail = ({ album }) => {
  //destructuring album
  const { title, artist, thumbnail_image } = album;
  //destructuring styles
  const { headerContentStyle, thumbnailStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

//export AlbumDetail
export default AlbumDetail;
