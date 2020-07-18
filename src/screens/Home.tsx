/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Button} from 'react-native';

export interface HomeProps {
  navigation: any;
}

export default function Home(props: HomeProps) {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button title="Home" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
