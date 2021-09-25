import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import Home from '~/screens/Home';
import Game from '~/screens/Game';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Game" component={Game} />
      </Navigator>
    </NavigationContainer>
  );
}
