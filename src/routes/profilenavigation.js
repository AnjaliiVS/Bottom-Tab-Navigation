import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


import Profile from '../Screens/Profile'




const ProfileNav = createStackNavigator();
export default class Profilenavigation extends Component {
  render() {
    return (
      <ProfileNav.Screen name='Profile' component={Profile} />
    
      

   
    )
};}