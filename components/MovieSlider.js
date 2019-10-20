import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components'
import Swiper from 'react-native-swiper'
import Layout from '../constants/Layout'

const SWIPER_HEIGHT =  Layout.height / 3

const View = styled.View`
  background-color: red;
  height: ${SWIPER_HEIGHT}
`

const Text = styled.Text`

`

export const MovieSlider = ({movies}) => (
  <Swiper showsPagination={false} autoplay={true} style={{height: SWIPER_HEIGHT}}>
    <View><Text>Frist</Text></View>
    <View><Text>Second</Text></View>
    <View><Text>Thrid</Text></View>
  </Swiper>
);

MovieSlider.prototype = {
  movies: Proptypes.array
}
