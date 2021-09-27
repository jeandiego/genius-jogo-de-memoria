import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import StartView from './view';
import { addNewUser } from '~/store/reducers/user';

const Start = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [nickname, setNickname] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleNewUser = () => {
    if (!nickname) return;

    dispatch(addNewUser({ user: nickname }));
    setNickname('');
    navigation.navigate('Home');
  };

  const handleGoToHome = () => {
    if (!nickname) return;
    handleNewUser();
    navigation.navigate('Home');
  };

  useEffect(() => {}, [nickname]);

  return (
    <StartView
      onPress={handleGoToHome}
      currentUser={currentUser}
      nickname={nickname}
      setNickname={setNickname}
      handleNewUser={handleNewUser}
    />
  );
};

export default Start;
