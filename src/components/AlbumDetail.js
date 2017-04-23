//Import libraries for components
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//create Component
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: props.album.thumbnail_image }} style={styles.thumbnailStyle}/>
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
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
