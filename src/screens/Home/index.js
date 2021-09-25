import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HomeView from './view';
import i18n from '~/lang';

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
      leaderboard={leaderboard}
    />
  );
};

export default Home;
