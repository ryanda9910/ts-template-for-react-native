import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Home, About, Profile} from '../screens';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  About: undefined;
};

const TabStack = createBottomTabNavigator<RootStackParamList>();

const MainApp = () => {
  return (
    <TabStack.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor: 'blue'}}>
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="md-home" color={color} size={25} />
          ),
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="md-person" color={color} size={25} />
          ),
        }}
      />
      <TabStack.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color}) => (
            <Icon name="md-information" color={color} size={25} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default function RootApp() {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
}
