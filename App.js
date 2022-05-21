import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import MyTabs from './src/routes/bottomtabnavigation';


const Stack = createStackNavigator();

export default class App extends Component {
  render() {12
    return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    )
};
}