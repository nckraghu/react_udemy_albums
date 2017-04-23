//Import libraries for components
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//create Component
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

//export AlbumDetail
export default AlbumDetail;
