import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigation, CommonActions } from '@react-navigation/native';
import HomeView from './view';
import i18n from '~/lang';
import { StartGame } from '~/services/gameServices';

const Home = () => {
  const [currentLanguage, setCurrentLanguage] = useState('ptBR');
  const { leaderboard } = useSelector((state) => state);
  const [greetings, setGreetings] = useState('');
  const { t } = useTranslation();
  const navigation = useNavigation();
  const modalizeRef = useRef(null);

  const ChangeLanguage = () => {
    if (currentLanguage === 'ptBR') {
      i18n.changeLanguage('enUS');
      setCurrentLanguage('enUS');
    } else {
      i18n.changeLanguage('ptBR');
      setCurrentLanguage('ptBR');
    }
  };

  const getGreetings = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetings(t('GREETINGS.MORNING'));
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings(t('GREETINGS.AFTERNOON'));
    } else {
      setGreetings(t('GREETINGS.NIGHT'));
    }
  };

  const handleGoToGame = () => {
    navigation.navigate('Game');
    StartGame();
  };

  const handleGoToLeaderboard = () => {
    navigation.navigate('Leaderboard');
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const statistics = [
    {
      text: 'Menor número de jogadas',
      results: '75',
    },
    {
      text: 'Posição no Ranking',
      results: '1º',
    },
  ];

  useEffect(() => {
    getGreetings();
  }, []);

  useEffect(() => {
    navigation.dispatch((state) => {
      const routes = state.routes.filter((r) => r.name !== 'Start');

      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }, []);

  return (
    <HomeView
      onPress={ChangeLanguage}
      greetings={greetings}
      statistics={statistics}
      leaderboard={leaderboard}
      goToGame={handleGoToGame}
      goToLeaderboard={handleGoToLeaderboard}
      onOpen={onOpen}
      modalRef={modalizeRef}
    />
  );
};

export default Home;
