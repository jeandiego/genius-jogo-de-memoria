import React from 'react';
import './config/ReactotronConfig';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
       <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Text>Ola, mundo</Text>
    </SafeAreaView>
  );
};

export default App;
