import React, {Component} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigation from './homenavigation';
import ProfileNavigation from './profilenavigation';
const Tab = createBottomTabNavigator();
export default class MyTabs extends Component {
  render() {
    return (
      <Tab.Navigator
      initialRouteName="Home"
        screenOptions={{
          activeTintColor: '#e91e63',
           }}>
        <Tab.Screen
          name="Home"
          component={Navigation}
          options={{
            // set
            tabBarLabel: 'Home',
            tabBarStyle:{width:'80%',borderRadius:15,backgroundColor:"green",justifyContent:'center',alignSelf:'center'},
            tabBarIcon: ({focused}) => {
              const image = focused ? 'home' : 'home-outline';
              return <Ionicons name={image} size={28} color="white" />;
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Profile',
            tabBarStyle:{width:'80%',borderRadius:15,backgroundColor:"green",justifyContent:'center',alignSelf:'center'},
            tabBarIcon: ({focused}) => {
              const image = focused ? 'user-circle' : 'user-circle-o';
              return <FontAwesome name={image} size={28} color="white" />;
            },
          }}
        />
      </Tab.Navigator>
     
    );
  }
}
