import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigation, CommonActions } from '@react-navigation/native';
import HomeView from './view';
import i18n from '~/lang';
import { StartGame } from '~/services/gameServices';

const Home = () => {
  const [currentLanguage, setCurrentLanguage] = useState('ptBR');
  const { data } = useSelector((state) => state.leaderboard);
  const { currentUser } = useSelector((state) => state.user);
  const [greetings, setGreetings] = useState('');
  const [statistics, setStatistics] = useState([]);
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

  const generateStatistics = (userStats) => {
    setStatistics([
      {
        id: 1,
        text: t('HOME.BESTSCORE'),
        results: userStats?.moves ? userStats.moves : '-',
      },
      {
        id: 2,
        text: t('HOME.POSITION'),
        results: `${userStats.position}º`,
      },
    ]);
  };

  useEffect(() => {
    const userPosition = data.findIndex((item) => item.id === currentUser.id);
    const userStats = data.find((item) => item.id === currentUser.id);

    generateStatistics({
      position: userPosition !== -1 ? userPosition + 1 : '-',
      ...userStats,
    });
  }, [data, currentUser]);

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
      user={currentUser}
      onPress={ChangeLanguage}
      greetings={greetings}
      statistics={statistics}
      leaderboard={data}
      goToGame={handleGoToGame}
      goToLeaderboard={handleGoToLeaderboard}
      onOpen={onOpen}
      modalRef={modalizeRef}
    />
  );
};

export default Home;
