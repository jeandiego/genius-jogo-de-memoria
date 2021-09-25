import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HomeView from './view';
import i18n from '~/lang';
import { levels } from '~/enum/level';

const Home = () => {
  const [currentLanguage, setCurrentLanguage] = useState('ptBR');
  const [greetings, setGreetings] = useState('');
  const { t } = useTranslation();

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

  const gameLevel = [
    {
      text: t(`LEVEL.${levels.FIRST}`),
      level: levels.FIRST,
      onPress: () => {},
    },
    {
      text: t(`LEVEL.${levels.SECOND}`),
      level: levels.SECOND,
      onPress: () => {},
    },
    {
      text: t(`LEVEL.${levels.THIRD}`),
      level: levels.THIRD,
      onPress: () => {},
    },
  ];

  const leaderboard = [
    {
      username: 'Poliana Camila',
      plays: '24',
      position: 1,
    },
    {
      username: 'Jean Diego',
      plays: '27',
      position: 2,
    },
    {
      username: 'Ynei Francisco',
      plays: '30',
      position: 3,
    },
  ];

  useEffect(() => {
    getGreetings();
  }, []);

  useEffect(() => {}, []);

  return (
    <HomeView
      onPress={ChangeLanguage}
      greetings={greetings}
      statistics={statistics}
      gameLevel={gameLevel}
      leaderboard={leaderboard}
    />
  );
};

export default Home;
