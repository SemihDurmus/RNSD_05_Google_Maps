import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import MapView from 'react-native-maps';
import Axios from 'axios';
import {City, RestaurantDetail, SearchBar} from './components';
import {mainPageStyle} from './styles';

const Main = (props) => {
  const [cityList, setCityList] = useState([]);

  // const fetchCities = async () => {
  //   const response = await Axios.get(
  //     'https://worldwide-restaurants.p.rapidapi.com/photos',
  //   );
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   fetchCities();
  // }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e6e6e6'}}>
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={mainPageStyle.absoluteView}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Main;
