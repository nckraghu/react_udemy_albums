//Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//Creating the Component
class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);

    return (
        <View>
          <Text>Album List</Text>
        </View>
    );
  }
}

export default AlbumList;
