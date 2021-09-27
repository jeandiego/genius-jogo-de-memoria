import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import Home from '~/screens/Home';
import Game from '~/screens/Game';
import Start from '~/screens/Start';
import Leaderboard from '~/screens/Leaderboard';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Start" component={Start} />
        <Screen name="Home" component={Home} />
        <Screen name="Game" component={Game} />
        <Screen name="Leaderboard" component={Leaderboard} />
      </Navigator>
    </NavigationContainer>
  );
}
