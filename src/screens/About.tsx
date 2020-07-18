/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Button} from 'react-native';

export interface AboutProps {
  navigation: any;
}

export default function About(props: AboutProps) {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>About</Text>
      <Button title="About" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
