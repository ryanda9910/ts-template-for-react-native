/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, Button} from 'react-native';

export interface ProfileProps {
  navigation: any;
}

export default function Profile(props: ProfileProps) {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
      <Button title="Profile" onPress={() => navigation.navigate('About')} />
    </View>
  );
}
