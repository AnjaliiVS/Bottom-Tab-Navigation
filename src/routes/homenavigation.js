import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/home';

const HomeNav = createStackNavigator();

export default class Homenavigation extends Component {
  render() {
    return (
   
      <HomeNav.Screen name='Home' component={Home} />
    
  );
};}