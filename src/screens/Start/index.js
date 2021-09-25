import React from 'react';
import { useNavigation } from '@react-navigation/native';
import StartView from './view';

const Start = () => {
  const navigation = useNavigation();

  const handleGoToHome = () => {
    navigation.navigate('Home');
  };

  return <StartView onPress={handleGoToHome} />;
};

export default Start;
