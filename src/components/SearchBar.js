import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {searchbarStyle} from '../styles';

const SearchBar = (props) => {
  return (
    <View style={searchbarStyle.container}>
      <Icon name="magnify" size={30} color="#e6e6e6" />
      <TextInput
        style={searchbarStyle.input}
        placeholder="Search a city ..."
        placeholderTextColor="#e6e6e6"
        maxLength={25}
      />
    </View>
  );
};

export {SearchBar};
