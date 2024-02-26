
import React from 'react';
import { View, Text, Image } from 'react-native';
import { APP } from '../consts/app';

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Image source={APP.CAROUSEL.IMG3} style={{
        width: '100%',
        height: 200,
        borderRadius: 8,
      }} />
    </View>
  );
}

export default AboutScreen;
