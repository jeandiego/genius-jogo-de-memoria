import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ActionButton from '~/components/ActionButton';
import GlobalContainer from '~/components/Container';
import GeniusInput from '~/components/GeniusInput';
import GeniusText from '~/components/GeniusText';
import { GreetingsView, IconView, InputView, KeyboardView } from './styles';

const HomeView = ({ onPress }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { t } = useTranslation();

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  return (
    <GlobalContainer background="primary">
      <KeyboardView>
        <IconView />
        <GreetingsView>
          <GeniusText
            color="white"
            fontFamily="bold"
            size={28}
            pBottom={16}
            align="center">
            {t('START.WELCOME')}
          </GeniusText>
          <GeniusText color="white" align="center" size={18}>
            {t('START.DESCRIPTION')}
          </GeniusText>
        </GreetingsView>
        <InputView>
          <GeniusText
            align="center"
            fontFamily="bold"
            color="primary_dark"
            size={16}
            pBottom={8}>
            {t('START.CREATE_USER')}
          </GeniusText>
          <GeniusInput
            isFocused={isFocused}
            placeholder={t('START.PLACEHOLDER')}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            // onChangeText={}
          />
        </InputView>
      </KeyboardView>
      <ActionButton
        text={t('START.BUTTON_START')}
        activeOpacity={0.75}
        onPress={onPress}
        background="secondary"
      />
    </GlobalContainer>
  );
};

export default HomeView;
