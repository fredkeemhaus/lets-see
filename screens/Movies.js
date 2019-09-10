import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default ({navigation}) =>  (
<TouchableOpacity onPress={() => navigation.navigate('Detail')} style={{marginTop: 200}}>
  <Text>Go to Detail</Text>
  </TouchableOpacity>
  )